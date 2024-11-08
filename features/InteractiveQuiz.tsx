"use client";
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { quizQuestions } from '@/constants/quiz-questions'

const InteractiveQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [askedQuestions, setAskedQuestions] = useState(quizQuestions)
    const [mounted, setMounted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false)
    const [answerChecked, setAnswerChecked] = useState(false)

    const noOfAskedQuestions = 5; // Number of questions to ask


    // Function to randomly select 'numElements' elements from the array
    function getRandomElements(arr: { question: string; options: string[]; correctAnswer: number; }[], numElements: number) {
      const selectedElements = [];
      const usedIndices = new Set();
  
      while (selectedElements.length < numElements) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!usedIndices.has(randomIndex)) {
          selectedElements.push(arr[randomIndex]);
          usedIndices.add(randomIndex);
        }
      }
  
      return selectedElements;
    }


    useEffect(() => {
      setMounted(true);

      const generatedQuestions = getRandomElements(quizQuestions, noOfAskedQuestions);
      setAskedQuestions(generatedQuestions);

    }, []);

    useEffect(() => {
      if (quizCompleted) {
        const generatedQuestions = getRandomElements(quizQuestions, noOfAskedQuestions);
        setAskedQuestions(generatedQuestions);
      }
    }, [quizCompleted]);

    // Function to check the answer
    const checkAnswer = () => {
      if (selectedAnswer !== null) {
        const correct = selectedAnswer === askedQuestions[currentQuestion].correctAnswer
        setIsCorrect(correct)
        setAnswerChecked(true)
      }
    }
  
    // Function to handle answer submit
    // TODO: needs improvement
    const handleAnswerSubmit = () => {
      if (selectedAnswer !== null) {

        // const correct = selectedAnswer === askedQuestions[currentQuestion].correctAnswer
        // setIsCorrect(correct);
        // setAnswerChecked(true);

        setScore(score + (isCorrect ? 1 : 0))
        if (currentQuestion < askedQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
          setAnswerChecked(false)
        } else {
          setQuizCompleted(true)
        }
      }
    }
  
    // Function to reset the quiz
    const resetQuiz = () => {
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setScore(0)
      setQuizCompleted(false)
      setAnswerChecked(false)
      setIsCorrect(false)
    }
  


  return (
    <Card
      className={`text-xl md:text-2xl bg-white/10 text-white transition-opacity duration-1000 ease-in-out delay-700 ${
      mounted ? "opacity-100" : "opacity-0"
  }`}
    >
          <CardHeader>
            <CardTitle className="font-semibold sm:font-bold leading-7 sm:leading-8"><span className="font-medium sm:font-medium">Curious about what we’ll offer?</span> Take our Programming Quiz for a taste of the exciting learning ahead!</CardTitle>
          </CardHeader>
          <CardContent>
            {!quizCompleted ? (
              <>
                <p className="mb-4 text-lg">{currentQuestion + 1}/{noOfAskedQuestions}. {askedQuestions[currentQuestion].question}</p>
                <RadioGroup
                  value={selectedAnswer !== null ? selectedAnswer.toString() : ''}
                  onValueChange={(value) => !answerChecked && setSelectedAnswer(parseInt(value))}
                  className="space-y-2"
                  aria-labelledby="quiz-question-label"
                >
                  
                  <span id="quiz-question-label" className="sr-only">
                    {askedQuestions[currentQuestion].question}
                  </span>

                  {askedQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                          value={index.toString()}
                          disabled={answerChecked}
                          id={`option-${index}`}
                          aria-labelledby={`option-label-${index}`}
                          // className={"w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"}
                          className={answerChecked ? (
                            index === askedQuestions[currentQuestion].correctAnswer
                              ? "text-green-500 border-green-500 w-5 h-5 border-2 rounded-full checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              : index === selectedAnswer
                                ? "text-red-500 border-red-500 w-5 h-5 border-2 rounded-full checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                : "w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          ) : "w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"}
                      />

                      <Label
                        id={`option-label-${index}`}
                        htmlFor={`option-${index}`} 
                        // className="text-white text-left"
                        className={`text-white text-left ${
                          answerChecked
                            ? index === askedQuestions[currentQuestion].correctAnswer
                              ? "text-green-500"
                              : index === selectedAnswer
                                ? "text-red-500"
                                : ""
                            : ""
                        }`}
                        >{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="mt-4 flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
                  <Button 
                    onClick={checkAnswer} 
                    className="bg-green-500 hover:bg-green-600"
                    disabled={selectedAnswer === null || answerChecked}
                  >
                    Check Answer
                  </Button>

                  <Button
                    type="button"
                    aria-label='Submit Answer' 
                    onClick={handleAnswerSubmit} 
                    className="bg-blue-500 hover:bg-blue-600"
                    disabled={selectedAnswer === null || !answerChecked}
                  >
                    {currentQuestion < askedQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                  </Button>
                </div>
                {answerChecked && (
                  <p className={`mt-4 text-lg ${isCorrect ? "text-green-500" : "text-red-500"}`}>
                    {isCorrect ? "Correct!" : "Incorrect!"}
                  </p>
                )}
              </>
            ) : (
              <div>
                <p className="mb-4 text-lg">Quiz completed! Your score: {score}/{askedQuestions.length}</p>
                <Button
                  type="button"
                  aria-label='Try Again' 
                  onClick={resetQuiz} 
                  className="bg-blue-500 hover:bg-blue-600">
                  Try Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
  )
}

export default InteractiveQuiz