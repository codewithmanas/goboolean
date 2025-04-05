"use client";

import React from "react";
import { useState, useEffect } from "react";
// import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Timer, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import { db } from "@/config/firebase.client.config";
import { collection, doc, DocumentData, getDoc, getDocs } from "firebase/firestore";
import LoadingScreen from "./LoadingScreen";


export interface QuizQuestion {
  id: string; // ID of the question
  question: string; // The question text
  options: string[]; // Array of possible answers
  correctAnswer: number; // Index of the correct answer
  slug: string; // Slug for the topic
  topicName: string; // Name of the topic
  createdAt: string; // ISO timestamp for when the question was created
}

/*
  TODO: need optimization
    - code review is required
    - thorough testing is required
  !: need to improve performance using useMemo or useCallback
  TODO: need to improve user experience by adding loading states and error handling
*/

/*
  TODO: need optimization for quiz topics and quiz questions
  - This is all about data fetching on build time or request time
  - 1. Fetch quiz topics on build time
  - 2. Fetch quiz questions on request time
  - 3. Cache quiz topics and quiz questions
  - 4. Use React Query for data fetching (This is not recommended for this quiz feature)
*/

const DynamicQuiz = ({ slug }: { slug: string }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0); // quizTimer in minutes
  const [isTimeUp, setIsTimeUp] = useState(false);
  // const [answerChecked, setAnswerChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [questionsSet, setQuestionsSet] = useState<QuizQuestion[]>([]); // Fetch quiz questions for the specific slug


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchAllQuizQuestions = async (quizTopic: string) => {
    try {
      // Reference the specific document inside the parent collection
      const parentDocRef = doc(db, "quizTopics", `${quizTopic}`);

      // Reference the subcollection inside the parent document
      const subcollectionRef = collection(parentDocRef, "quizQuestionsSet");

      // Fetch all documents from the subcollection
      const snapshot = await getDocs(subcollectionRef);

      // Convert documents into an array of data
      const documents: DocumentData[] = snapshot.docs.map((doc) => doc.data()) as QuizQuestion[]; // Convert the documents into an array of data

      // const documents = snapshot.docs.map((doc) => ({
      //   id: doc.id, // Include document ID if needed
      //   ...doc.data(), // Spread document data
      // }));

      return documents;
    } catch (error) {
      console.log("Error fetching quiz questions: ", error);
    }
}

const fetchQuizTimer = async (quizTopic: string) => {
try {
  const docRef = doc(db, "quizTopics", `${quizTopic}`); // Reference the specific document inside the parent collection
  const docSnap = await getDoc(docRef); // Fetch the document snapshot

  if (docSnap.exists()) {
    const data = docSnap.data(); // Get the document data
    const quizTimer = data?.timeLimitInMinutes; // Access the timeLimitInMinutes field
    return quizTimer;
  } else {
    console.log("No such document!");
  }
  
} catch (error) {
  console.log("Error fetching quiz timer: ", error);
}
} 

  // Function to fetch quiz data
  const fetchQuizData = async () => {
    const questionsSet: QuizQuestion[] = await fetchAllQuizQuestions(slug) as QuizQuestion[]; // Fetch quiz questions for the specific slug
    const quizTimer = await fetchQuizTimer(slug);

    if(!questionsSet || !quizTimer) {
      setIsLoading(false);
      setIsError(true);
    } else {
      setIsLoading(false);
      setQuestionsSet(questionsSet);
      if (questionsSet.length > 0) {
        setTimeLeft(quizTimer * 60); // Convert minutes to seconds
      }
    }

  };

  useEffect(() => {
    fetchQuizData();
  }, []);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    // Check if answer is correct
    if (selectedAnswer === questionsSet[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or show results
    if (currentQuestion + 1 < questionsSet.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };


  return (
    <div>
      <main className="container mx-auto py-12 px-4">

        {isLoading && (
          <>
            <LoadingScreen />
          </>
        )}

        {isError && (
              <div className="flex flex-col p-4 items-center justify-center h-screen bg-blue-950 text-white">
                <h1 className="text-2xl font-bold mb-4">An error occurred while fetching the quiz data 🙁</h1>
                <p className="text-lg text-muted-foreground">Please try again later.</p>
              </div>
        )}

        {
          questionsSet.length === 0 && (
              <div className="flex flex-col p-4 items-center justify-center min-h-screen bg-blue-950 text-white">
                <h1 className="text-2xl font-bold mb-4">No questions found 🙁, on this specific topic</h1>
                <p className="text-lg text-muted-foreground">We are working on it 🚧, Please try another topic or check back later.</p>
              </div>
           )
        }

        {!(isTimeUp || showResults) && !isLoading && (questionsSet.length !== 0) && <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 sm:mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft? timeLeft : 0)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questionsSet.length}
              </span>
            </div>
          </div>

          {/* <Progress
            value={(currentQuestion / questionsSet.length) * 100}
            className="mb-8 text-blue-300"
          /> */}

          <ProgressBar progress={(currentQuestion / questionsSet.length) * 100} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-blue-300">
                    {questionsSet[currentQuestion].question}
                  </h2>
                </div>

                <RadioGroup
                  value={selectedAnswer !== null ? selectedAnswer.toString() : ''}
                  // onValueChange={(value) => !answerChecked && setSelectedAnswer(parseInt(value))}
                  onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                  className="space-y-4"
                >
                  {questionsSet[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-2 rounded-lg border p-4 transition-colors hover:bg-muted/50 text-blue-200">
                        <RadioGroupItem 
                            value={index.toString()}
                            id={`option-${index}`}
                            
                            />
                        <Label
                          htmlFor={`option-${index}`}
                          className="w-full cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    </motion.div>
                  ))}
                </RadioGroup>

                <div className="mt-6 flex justify-center sm:justify-end">
                  <Button 
                      onClick={handleNext} 
                      disabled={selectedAnswer === null} size="lg">
                    {currentQuestion + 1 === questionsSet.length
                      ? "Finish Quiz"
                      : "Next Question"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

            {timeLeft < 300 && !showResults && (
              <div className="mt-4 flex items-center gap-2 text-red-500">
                <AlertCircle className="h-5 w-5" />
                <span>Less than 5 minutes remaining!</span>
              </div>
            )}
        </motion.div>}

        {
          (isTimeUp || showResults) && !isLoading && (questionsSet.length !== 0) && (
            <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-300 text-center">
                    {isTimeUp ? "Time's Up!" : "Quiz Completed!"}
                    </h2>
                  </div>
                </CardHeader>
              <CardContent>
                <div className="p-2 text-center text-blue-300">Your score: {score} out of {questionsSet.length}<br />
                      Percentage: {((score / questionsSet.length) * 100).toFixed(1)}%
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                  <Button onClick={() => (window.location.href = "/quiz")}>
                    Back to Quizzes
                  </Button>
              </CardFooter>
            </Card>
          </motion.div>
          )
        }
      </main>

    </div>
  );
};

export default DynamicQuiz;
