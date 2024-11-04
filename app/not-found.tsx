import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div id="notfound" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
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
    </div>
  );
};

export default NotFound;
