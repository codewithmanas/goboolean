"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Code2,
  Search,
  ChevronRight,
  Award,
  Clock,
  BarChart,
  Menu,
  // Loader2,
} from "lucide-react";
import Link from "next/link";
// import { useToast } from "@/hooks/use-toast";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const quizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description:
      "Test your knowledge of JavaScript basics, including variables, functions, and control flow.",
    difficulty: "Beginner",
    questions: 20,
    timeLimit: "30 minutes",
  },
  {
    id: 2,
    title: "Advanced React Concepts",
    description:
      "Challenge yourself with questions on React hooks, context, and performance optimization.",
    difficulty: "Advanced",
    questions: 15,
    timeLimit: "25 minutes",
  },
  {
    id: 3,
    title: "CSS Layout Mastery",
    description:
      "Prove your skills in CSS layout techniques, including flexbox and grid.",
    difficulty: "Intermediate",
    questions: 25,
    timeLimit: "40 minutes",
  },
  {
    id: 4,
    title: "Python Data Structures",
    description:
      "Explore your understanding of Python's built-in data structures and their operations.",
    difficulty: "Intermediate",
    questions: 30,
    timeLimit: "45 minutes",
  },
  {
    id: 5,
    title: "Web Security Essentials",
    description:
      "Test your knowledge of common web security vulnerabilities and best practices.",
    difficulty: "Advanced",
    questions: 20,
    timeLimit: "35 minutes",
  },
];

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

export default function QuizzesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const { toast } = useToast();

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuizStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  // const handleNotifySubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   // Here you would typically send the email to your backend
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
  //   setIsSubmitting(false);
  //   toast({
  //     title: "Thanks for your interest!",
  //     description: "We'll keep you updated on launch of quizzes.",
  //   });
  //   console.log("Notify email:", email);
  //   setEmail("");
  //   setIsDialogOpen(false);
  // };

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
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
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            variants={fadeIn}
          >
            GoBoolean Quizzes
          </motion.h1>
          <motion.div variants={fadeIn} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <Input
                type="text"
                placeholder="Search quizzes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredQuizzes.map((quiz) => (
              <Card
                key={quiz.id}
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-blue-300">
                    {quiz.title}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    <span className="flex items-center">
                      <Award className="mr-1 h-4 w-4" /> {quiz.difficulty}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">{quiz.description}</p>
                  <div className="flex justify-between text-sm text-blue-200">
                    <span className="flex items-center">
                      <BarChart className="mr-1 h-4 w-4" /> {quiz.questions}{" "}
                      questions
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" /> {quiz.timeLimit}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={handleQuizStart}>
                    Start Quiz <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
        <DialogContent className="bg-blue-900 text-white sm:max-w-[425px] mx-auto">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-blue-300 text-center">
              Quizzes Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-blue-100 text-center">
              We{`'re`} working hard to bring you exciting coding quizzes. Stay tuned!
            </DialogDescription>
          </DialogHeader>
          {/* <form onSubmit={handleNotifySubmit} className="space-y-4 mt-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50  text-sm sm:text-base"
            />
            <DialogFooter className="sm:justify-center">
              <Button type="submit" 
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-sm sm:text-base py-2 px-4"
              disabled={isSubmitting}
              >
                {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                {`Notify Me`}{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
              </Button>
            </DialogFooter>
          </form> */}
        </DialogContent>
      </Dialog>

      <footer className="bg-blue-950/50 py-10 mt-12 px-4">
        <div className="container mx-auto text-center text-sm text-blue-300">
          © {new Date().getFullYear()} goboolean.in All rights reserved.
        </div>
      </footer>
    </div>
  );
}
