"use client";


import { motion } from "framer-motion";
import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";


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

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.header
    className="container mx-auto py-6 px-4 flex justify-between items-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Link href="/" className="flex items-center space-x-2">
      {/* <Code2 className="h-8 w-6 text-blue-400" /> */}
      <Image src="/icon-dark.svg" alt="GoBoolean" width={32} height={32} />

      <span 
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        style={{ fontFamily: "Reem Kufi", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        GoBoolean
      </span>
    </Link>

    <nav className="hidden md:flex md: items-center space-x-4">
      <ul className="flex space-x-6 items-center">
        {navItems.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href={`${item.path}`}
              className="hover:text-blue-300 transition-colors"
            >
              {item.title}
            </Link>
          </motion.li>
        ))}

        <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 * 0.1 }}                      
            >
            <SignedOut>
              <SignInButton>
                <div 
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                // className="hover:text-blue-300 transition-colors text-base"
                >
                  Sign In
                </div>
              </SignInButton>
            </SignedOut>
          </motion.li>

        <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 * 0.1 }}                      
            >
            <SignedOut>
              <SignUpButton>
                <div 
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                // className="hover:text-blue-300 transition-colors text-base"
                >
                  Sign Up
                </div>
              </SignUpButton>
            </SignedOut>
          </motion.li>

            <SignedIn>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 * 0.1 }}
              >
                <UserButton />
              </motion.li>
            </SignedIn>
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
  </motion.header>
  );
};

export default Header;
