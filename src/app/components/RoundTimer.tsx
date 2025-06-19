'use client';
import { useBattleStore } from '../lib/store';
import { useEffect } from 'react';

export default function RoundTimer() {
  const { timeLeft, decrementTime, startNextRound, isGameOver } = useBattleStore();

  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      decrementTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [decrementTime, isGameOver]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => {
        startNextRound();
      }, 1000); // small delay before moving to next round
    }
  }, [timeLeft, startNextRound]);

  return (
    <div className="text-center font-bold text-xl py-2">
      Time Left: {timeLeft}s
    </div>
  );
}
