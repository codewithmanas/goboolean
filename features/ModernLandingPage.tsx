"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Loader2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
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


export default function ModernLandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { toast } = useToast();


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
          // console.log("Email sent successfully", data);

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
    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would typically send the email to your backend
    handlePostRequest();

    // toast({
    //   title: "Thanks for your interest!",
    //   description: "We'll keep you updated on new features and launches.",
    // });
  };

  return (
    <div>
      {/* <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white"> */}
      {/* Header */}

      {/* Hero Section */}
      <motion.section
        className="container mx-auto py-12 sm:py-20 px-4 text-center"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          variants={fadeIn}
        >
          Welcome to GoBoolean
        </motion.h1>
        <motion.p
          className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Your one-stop platform for coding knowledge, challenges, projects, and
          community. Elevate your programming skills and connect with fellow
          developers.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
          variants={fadeIn}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-grow"
          />
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                {`Sign Up for Updates`}{" "}
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </motion.form>

        <motion.ul
          className="mt-6 flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-6 text-sm text-blue-300"
          variants={stagger}
        >
          {["Exclusive quizzes", "Tech tips", "Project ideas"].map(
            (item, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                className="flex items-center whitespace-nowrap"
              >
                <span className="mr-2 text-green-400">✓</span> {item}
              </motion.li>
            )
          )}
        </motion.ul>
      </motion.section>

      {/* Overview of Site Sections */}
      {/* <motion.section
        className="container mx-auto py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 rounded-full p-1">
            {["blogs", "quizzes", "projects", "community"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full text-white data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {["blogs", "quizzes", "projects", "community"].map(
            (tab, tabIndex) => (
              <TabsContent 
                    key={tabIndex} 
                    value={tab}>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  {[...Array(3)].map((_, index) => (
                    <motion.div key={index} variants={fadeIn}>
                      <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-blue-300">
                            {tab === "blogs" && "Mastering React Hooks"}
                            {tab === "quizzes" && "JavaScript Fundamentals"}
                            {tab === "projects" && "Build a Weather App"}
                            {tab === "community" && "User Success Story"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-blue-100">
                            {tab === "blogs" &&
                              "Explore the latest insights and best practices in modern web development."}
                            {tab === "quizzes" &&
                              "Test your knowledge and learn new concepts with our interactive quizzes."}
                            {tab === "projects" &&
                              "Get hands-on experience with real-world projects to boost your portfolio."}
                            {tab === "community" &&
                              '"GoBoolean helped me land my dream job in tech!" - Alex J.'}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            )
          )}
        </Tabs>
      </motion.section> */}

      {/* Footer */}
    </div>
  );
}
