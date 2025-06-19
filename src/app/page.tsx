'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>CSS Battle Arena | Real-time CSS Skill Tester</title>
        <meta
          name="description"
          content="Join the CSS Battle Arena – a real-time platform to test and compete with your CSS design skills. Replicate, code, and conquer!"
        />
        <meta name="keywords" content="CSS Battle, Code Challenge, Frontend, Design Match, CSS Game" />
        <meta name="author" content="Suresh Kumar Hela" />
        <meta property="og:title" content="CSS Battle Arena" />
        <meta property="og:description" content="Replicate creative UI using only CSS. Compete with other developers in real-time." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Landing Page */}
      <div className="min-h-screen relative overflow-hidden bg-black text-white flex flex-col items-center justify-center px-6">
        {/* Blurred Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-purple-700 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-30 animate-pulse" />

        {/* Grid Glow Overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

        <div className="relative z-10 text-center space-y-6 max-w-3xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_20px_rgba(255,0,255,0.4)]"
          >
            CSS Battle Arena
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Enter the arena where CSS isn t just style – it s a weapon. Replicate dynamic designs, beat the clock, and rise to the top.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/battle')}
            className="mt-8 px-10 py-4 text-lg font-bold bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-[0_0_20px_#0ff] hover:shadow-[0_0_35px_#0ff] transition"
          >
            🚀 Enter the Arena
          </motion.button>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 text-sm text-gray-500 z-10"
        >
          © 2025 Suresh Kumar Hela • Built for CSS Warriors
        </motion.footer>
      </div>
    </>
  );
}
