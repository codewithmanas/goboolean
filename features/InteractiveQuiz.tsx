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

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
    const handleAnswerSubmit = () => {
      if (selectedAnswer !== null) {
        if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
          setScore(score + 1)
        }
        if (currentQuestion < quizQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setSelectedAnswer(null)
        } else {
          setQuizCompleted(true)
        }
      }
    }
  
    const resetQuiz = () => {
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setScore(0)
      setQuizCompleted(false)
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
                <p className="mb-4 text-lg">{quizQuestions[currentQuestion].question}</p>
                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                  className="space-y-2"
                >
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="text-white text-left">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button 
                  onClick={handleAnswerSubmit} 
                  className="mt-4 bg-blue-500 hover:bg-blue-600"
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </>
            ) : (
              <div>
                <p className="mb-4 text-lg">Quiz completed! Your score: {score}/{quizQuestions.length}</p>
                <Button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-600">
                  Try Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
  )
}

export default InteractiveQuiz