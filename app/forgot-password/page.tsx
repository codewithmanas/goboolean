"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Requesting password reset for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col justify-center items-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Code2 className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                GoBoolean
              </span>
            </div>
            <CardTitle className="text-2xl font-bold text-center text-white">
              Forgot Password
            </CardTitle>
            <CardDescription className="text-center text-blue-200">
              {isSubmitted
                ? "Check your email for reset instructions"
                : "Enter your email to reset your password"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-200">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  Reset Password <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="text-center text-blue-200">
                <p>
                  If an account exists for {email}, you will receive password
                  reset instructions.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link
              href="/login"
              className="text-blue-400 hover:underline flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Login
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
