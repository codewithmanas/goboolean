'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-950 to-indigo-900 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Loader2 className="h-16 w-16 text-blue-400" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-2xl font-bold text-white"
        >
          Loading Quizzes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-2 text-blue-200"
        >
          Please wait while we fetch the latest quizzes...
        </motion.p>
      </motion.div>
      {/* <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ delay: 1, duration: 2, ease: "easeInOut", repeat: Infinity }}
        className="mt-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
      /> */}
    </div>
  )
}