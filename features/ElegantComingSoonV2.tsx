"use client";
import React, { useEffect, useState } from "react";
import InteractiveQuiz from "./InteractiveQuiz";

const ElegantComingSoonV2 = () => {
  const [mounted, setMounted] = useState(false);
  const [circles, setCircles] = useState([{id: 0, width: 0, height: 0, left: 50, top: 50, animationDelay: "0s"}]);

  useEffect(() => {
    const generatedCircles = [...Array(5)].map((_, i) => ({
        id: i,
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: `${i * 0.5}s`,
      }));

      setCircles(generatedCircles);

    setMounted(true);
  }, []);
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
            {circles.map(({ id, width, height, left, top, animationDelay }) => (
            <div
                key={id}
                className="absolute rounded-full bg-blue-500 opacity-10 animate-float"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay,
                    transitionDelay: animationDelay,
                  }}
            />
            ))}
        </div>

        {/* Content */}
        <main className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-4 transition-opacity duration-1000 ease-in-out ${
                mounted ? "opacity-100" : "opacity-0"
            }`}
            >
            Coming Soon
            </h1>
            <h2
            className={`text-3xl md:text-4xl font-semibold text-blue-200 transition-opacity duration-1000 ease-in-out delay-300 ${
                mounted ? "opacity-100" : "opacity-0"
            }`}
            >
            goboolean.in
            </h2>
            <p
            className={`text-xl md:text-2xl text-blue-100 transition-opacity duration-1000 ease-in-out delay-500 ${
                mounted ? "opacity-100" : "opacity-0"
            }`}
            >
            Your ultimate platform for tech tips, programming resources, and interactive
            coding quizzes.
            </p>

            <InteractiveQuiz />
        </main>
        </div>

        <footer className="text-blue-200 text-sm text-center p-2">
            © {new Date().getFullYear()} goboolean.in. All rights reserved.
        </footer>

        <style jsx>{`
            @keyframes float {
            0%,
            100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(5deg);
            }
            }
            .animate-float {
            animation: float 20s infinite;
            }
        `}</style>
    </div>
  );
};

export default ElegantComingSoonV2;
