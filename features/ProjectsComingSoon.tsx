"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Laptop, Brain, Zap } from "lucide-react";
import toast from 'react-hot-toast';
import { toastTheme } from "@/constants/toast-theme";

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


export default function ProjectsComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: needs improvement and optimization
const handlePostRequest = () => {
  fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      if(data?.data) {
        setEmail("");
        toast.success("Thanks for your interest!, \nWe'll keep you updated on new features and launches.", toastTheme);
        setIsSubmitting(false);

      } else {
        throw new Error("Something went wrong!, Please try again later.");
      }

    })
    .catch((error) => {
      // Handle errors
      console.error("Error sending email", error);

      setEmail("");
      toast.error("Something went wrong! \nPlease try again later.", toastTheme);
      setIsSubmitting(false);
    });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Here you would typically send the email to your backend
  handlePostRequest();
};

  return (
    <div>
      <main className="container mx-auto py-12 px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl mx-auto space-y-12"
        >
          <motion.div variants={fadeIn} className="text-center space-y-4">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}
            >
              GoBoolean Projects
            </h1>
            <h2 className="text-3xl font-semibold text-blue-200">
              Coming Soon
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We{`'re`} curating an exciting collection of coding projects to
              challenge and inspire you. Get ready to build, learn, and showcase
              your skills!
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Laptop className="h-8 w-8 mb-2 text-blue-400" />
                <CardTitle className="text-xl text-blue-300">Build</CardTitle>
                <CardDescription className="text-blue-200">
                  Hands-on projects to apply your coding skills
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Brain className="h-8 w-8 mb-2 text-blue-400" />
                <CardTitle className="text-xl text-blue-300">Learn</CardTitle>
                <CardDescription className="text-blue-200">
                  Gain practical experience with real-world projects
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <Zap className="h-8 w-8 mb-2 text-blue-400" />
                <CardTitle className="text-xl text-blue-300">
                  Showcase
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Build a portfolio to impress potential employers
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-300">
                  Get Notified
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Be the first to know when our projects section launches!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      "Notify Me"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>

    </div>
  );
}
