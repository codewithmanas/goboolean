"use client";

import { QuizQuestion } from "@/app/quiz/[slug]/page";
import React from "react";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Timer, AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";

/*
  TODO: need optimization
    - code review is required
    - thorough testing is required
  !: need to improve performance using useMemo or useCallback
  TODO: need to improve user experience by adding loading states and error handling
*/

const DynamicQuiz = ({ questionsSet }: { questionsSet: QuizQuestion[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  // const [answerChecked, setAnswerChecked] = useState(false);

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

  if(questionsSet.length === 0) {
    return (
      <div className="flex flex-col p-4 items-center justify-center h-screen bg-blue-950 text-white">
          <h1 className="text-2xl font-bold mb-4">No questions found 🙁, on this specific topic</h1>
          <p className="text-lg text-muted-foreground">We are working on it 🚧, Please try another topic or check back later.</p>
      </div>
    )
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // console.log("selectedAnswer", selectedAnswer);

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

  // console.log("Questions Set:", questionsSet);

  if (showResults || isTimeUp) {
    return (
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isTimeUp ? "Time's Up!" : "Quiz Completed!"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your score: {score} out of {questionsSet.length}
              <br />
              Percentage: {((score / questionsSet.length) * 100).toFixed(1)}%
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Button onClick={() => (window.location.href = "/quiz")}>
                Back to Quizzes
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <div className="bg-blue-950 text-white min-h-screen">
    <motion.div
      className="container mx-auto max-w-3xl px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5" />
          <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questionsSet.length}
          </span>
        </div>
      </div>

      <Progress
        value={(currentQuestion / questionsSet.length) * 100}
        className="mb-8"
      />

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

            <div className="mt-6 flex justify-end">
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
    </motion.div>
    </div>
  );
};

export default DynamicQuiz;
