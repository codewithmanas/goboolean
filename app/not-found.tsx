"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NotFound = () => {
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
  }, []);
  return (
    <div id="notfound" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
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
        <div className="notfound">
            <div className="notfound-404">
                <h1>{`:(`}</h1>
            </div>
            <h2>404 - Page not found</h2>
            <p className="text-blue-100">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
            </p>
            <Link href={"/"}>home page</Link>
        </div>
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

export default NotFound;
