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
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { Loader2, BookOpen, Menu } from "lucide-react";
import Link from "next/link";
// import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { toastTheme } from "@/constants/toast-theme";
import toast from 'react-hot-toast';
// import { useToast } from "@/components/ui/use-toast"
// import { CustomToast, CustomToastProvider } from './custom-toast'

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

export default function BlogsComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setEmail("");
    
    toast.success("Thanks for your interest!, \nWe'll keep you updated on new features and launches.", toastTheme);

    setIsSubmitting(false);

    // toast({
    //   title: "Thanks for your interest!",
    //   description: "We'll notify you when our blog launches.",
    //   action: (
    //     <CustomToast
    //       title="Thanks for your interest!"
    //       description="We'll notify you when our blog launches."
    //     />
    //   ),
    // });
  };

  return (
    // <CustomToastProvider>
      <div className="min-h-screen bg-blue-950 text-white">
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
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeIn} className="text-center space-y-4">
              <BookOpen className="h-24 w-24 text-blue-400 mx-auto" />
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                GoBoolean Blogs
              </h1>
              <h2 className="text-3xl font-semibold text-blue-200">
                Coming Soon
              </h2>
              <p className="text-xl text-blue-100">
                We{`'re`} working hard to bring you insightful articles,
                tutorials, and tech news. Stay tuned for expert content that
                will elevate your coding skills!
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-300">
                    Get Notified
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Be the first to know when our blog launches and receive
                    exclusive content!
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

            {/* <motion.div variants={fadeIn} className="text-center">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                What to Expect
              </h3>
              <ul className="text-blue-100 space-y-2">
                <li>In-depth tutorials on the latest technologies</li>
                <li>Coding best practices and tips</li>
                <li>Industry insights and trends</li>
                <li>Guest posts from expert developers</li>
                <li>Project showcases and case studies</li>
              </ul>
            </motion.div> */}
          </motion.div>
        </main>

        <footer className="bg-blue-950/50 py-10 mt-12 px-4">
          <div className="container mx-auto text-center text-sm text-blue-300">
            © {new Date().getFullYear()} goboolean.in All rights reserved.
          </div>
        </footer>
      </div>
    // </CustomToastProvider>
  );
}
