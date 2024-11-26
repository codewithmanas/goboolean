"use client";

import { QuizQuestion } from "@/app/quiz/[slug]/page";
import React from "react";
import { useState, useEffect } from "react";
// import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Timer, AlertCircle, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";


const navItems = [
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Quizzes",
    path: "/quiz",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Community",
    path: "/community",
  },
];

/*
  TODO: need optimization
    - code review is required
    - thorough testing is required
  !: need to improve performance using useMemo or useCallback
  TODO: need to improve user experience by adding loading states and error handling
*/

const DynamicQuiz = ({ questionsSet, quizTimer }: { questionsSet: QuizQuestion[], quizTimer: number }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quizTimer * 60); // quizTimer in minutes
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
        <Image src="/icon-dark.svg" alt="GoBoolean" width={32} height={32} />
        <span 
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          style={{ fontFamily: "Reem Kufi" }}
        >
          GoBoolean
        </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={`${item.path}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-blue-900"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-blue-300">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={`${item.path}`}
                      className="block py-2 px-4 text-lg text-blue-100 hover:bg-blue-800 rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

    <main className="container mx-auto py-12 px-4">
      <motion.div
        className="mx-auto max-w-3xl"
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
      </motion.div>
    </main>

      <footer className="bg-blue-950/50 py-4 sm:py-6 mt-12 px-4">
        <div className="container mx-auto text-center text-sm text-blue-300">
          © {new Date().getFullYear()} goboolean.in All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DynamicQuiz;
