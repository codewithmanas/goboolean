"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Code2 } from "lucide-react";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Signing up with:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <header className="container mx-auto p-4 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <Code2 className="h-8 w-8" />
          <span className="text-2xl font-bold">GoBoolean</span>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/blogs" className="hover:text-blue-300">
                Blogs
              </a>
            </li>
            <li>
              <a href="#quizzes" className="hover:text-blue-300">
                Quizzes
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#community" className="hover:text-blue-300">
                Community
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Your Ultimate Tech Resource</h1>
        <p className="text-xl mb-8">
          Empower your coding journey with GoBoolean{`'s`} curated content and
          interactive learning experiences.
        </p>
        <form onSubmit={handleSignUp} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
            Sign Up for Free
          </Button>
        </form>
        
        <ul className="mt-4 flex justify-center space-x-4 text-sm text-blue-300">
          <li>✓ Exclusive quizzes</li>
          <li>✓ Tech tips</li>
          <li>✓ Project ideas</li>
        </ul>
      </section>

      {/* Overview of Site Sections */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="blogs">Trending Blogs</TabsTrigger>
            <TabsTrigger value="quizzes">Popular Quizzes</TabsTrigger>
            <TabsTrigger value="projects">Featured Projects</TabsTrigger>
            <TabsTrigger value="community">Community Impact</TabsTrigger>
          </TabsList>
          <TabsContent value="blogs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                "Mastering React Hooks",
                "Python vs JavaScript: A Comparison",
                "Building RESTful APIs",
              ].map((title, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Explore the latest insights and best practices in modern
                      web development.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="quizzes">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                "JavaScript Fundamentals",
                "React Component Lifecycle",
                "CSS Flexbox Mastery",
              ].map((title, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Test your knowledge and learn new concepts with our
                      interactive quizzes.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                "Build a Weather App with React",
                "Create a Blog with Next.js and Markdown",
              ].map((title, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Get hands-on experience with real-world projects to boost
                      your portfolio.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="community">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  name: "Alex Johnson",
                  comment: "GoBoolean helped me land my dream job in tech!",
                },
                {
                  name: "Sarah Lee",
                  comment:
                    "The project ideas are incredibly practical and fun to build.",
                },
                {
                  name: "Mike Chen",
                  comment:
                    "I've learned more here in a month than I did in a year of self-study.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-blue-300">
                          {testimonial.comment}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">GoBoolean</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li>
                <a href="#about" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/goboolean"
                  className="hover:text-blue-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/goboolean"
                  className="hover:text-blue-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container mx-auto mt-4 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} goboolean.in All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
