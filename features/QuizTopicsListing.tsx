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
  Dialog,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  ChevronRight,
  Award,
  Clock,
  BarChart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { quizProps } from "@/app/quiz/page";
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

export default function QuizTopicsListing({quizzes}: {quizzes: quizProps[]}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
//   const [quizzes, setQuizzes] = useState<DocumentData[]>([]);

    
  // const { toast } = useToast();
  const router = useRouter();

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuizStart = (slug: string) => {
    // setIsDialogOpen(true);
    router.push(`/quiz/${slug}`);

  };

  return (
    <div>
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
                    {quiz.name}
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
                      <BarChart className="mr-1 h-4 w-4" /> {quiz.noOfQuestions}{" "}
                      questions
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" /> {quiz.timeLimitInMinutes}{" "}{"minutes"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={() => handleQuizStart(quiz.slug)}>
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

    </div>
  );
}
