'use client';
import { useBattleStore } from "../lib/store";

export default function RoundInfo() {
  const { currentRound, roundLabel } = useBattleStore();

  return (
    <div className="text-center py-2">
      <h2 className="text-xl font-semibold">Round {currentRound + 1} / 3</h2>
      <p className="text-sm capitalize">Difficulty: {roundLabel}</p>
    </div>
  );
}
