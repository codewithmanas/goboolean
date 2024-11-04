"use client";
import React, { useEffect, useState } from "react";

const ElegantComingSoon = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10 animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
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
      </main>

      <footer className="absolute bottom-4 text-blue-200 text-sm">
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

export default ElegantComingSoon;
