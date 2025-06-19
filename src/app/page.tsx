'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-80 z-0" />

      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          CSS Battle Arena
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Test your CSS skills in real-time battles. Compete, create, and conquer designs.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/battle')}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg animate-pulse hover:animate-none transition"
        >
          🔥 Play Now
        </motion.button>
      </div>

      <footer className="absolute bottom-4 text-gray-500 text-sm">
        Built by Suresh • CSS Skill Tester
      </footer>
    </div>
  );
}
