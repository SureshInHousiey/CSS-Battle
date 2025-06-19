"use client";
import { useEffect } from "react";
import { useBattleStore } from "../lib/store";
import CodeEditor from "../components/CodeEditor";
import Preview from "../components/Preview";
import TargetDesign from "../components/TargetDesign";
import RoundTimer from "../components/RoundTimer";
import RoundInfo from "../components/RoundInfo";
import TargetColors from "../components/TargetColors";
// import ThemeToggle from '../components/ThemeToggle';
export default function BattlePage() {
  const { startGame, startNextRound, isGameOver, score, design } =
    useBattleStore();

  useEffect(() => {
    (async () => {
      await startGame();
    })();

    const blockInspect = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", blockInspect);
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    return () => {
      window.removeEventListener("keydown", blockInspect);
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
    };
  }, []);

  if (isGameOver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 text-white text-center">
        <h1 className="text-4xl font-extrabold">🎉 Battle Complete!</h1>
        <p className="text-xl">
          Your Score: <span className="text-green-400">{score}%</span>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 py-6">
      {/* <ThemeToggle /> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 space-y-4">
          <RoundInfo />
          <RoundTimer />
          <div>
            <h2 className="text-xl font-bold mb-2">🎯 Target</h2>
            <TargetDesign />
            {design?.colors && <TargetColors colors={design.colors} />}
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 space-y-4">
            <div>
              <h2 className="text-xl font-bold mb-2">💻 Your Code</h2>
              <CodeEditor />
            </div>
            <div className="text-right">
              <button
                onClick={startNextRound}
                className="px-4 py-2 mt-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
              >
                ✅ Submit & Go to Next Round
              </button>
            </div>
          </div>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-2">🔍 Live Preview</h2>
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}
