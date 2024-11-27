"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-blue-950/50 py-4 sm:py-6 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <Code2 className="h-6 w-6 text-blue-400" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          GoBoolean
        </span>
      </div>
      <nav>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
          {["About", "Contact", "Twitter", "GitHub"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-300 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div> */}
      <div className="container mx-auto mt-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} goboolean.in All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
