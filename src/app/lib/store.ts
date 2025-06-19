import { create } from "zustand";
import { Design, designs } from "../data/designs";
// import { generateDesign } from "../lib/generateDesign";

interface BattleStore {
  code: string;
  design: Design | null;
  currentRound: number;
  timeLeft: number;
  roundLabel: "easy" | "medium" | "hard";
  isGameOver: boolean;
  score: number;

  setCode: (code: string) => void;
  setScore: (score: number) => void;
  pickRandomDesign: (level?: "easy" | "medium" | "hard") => Promise<void>;
  startGame: () => Promise<void>;
  startNextRound: () => Promise<void>;
  decrementTime: () => void;
  endGame: () => void;
}

const roundLevels = ["easy", "medium", "hard"] as const;
function getTimeForLabel(label: "easy" | "medium" | "hard") {
  switch (label) {
    case "easy":
      return 3 * 60;
    case "medium":
      return 10 * 60;
    case "hard":
      return 15 * 60;
  }
}

export const useBattleStore = create<BattleStore>((set, get) => ({
  code: "",
  design: null,
  currentRound: 0,
  timeLeft: 180,
  roundLabel: "easy",
  isGameOver: false,
  score: 0,

  setCode: (code) => set({ code }),
  setScore: (score) => set({ score }),

  //   pickRandomDesign: async (level = "easy") => {
  //     try {
  //       const design = await generateDesign(level);
  //       set({ design, code: "" });
  //     } catch (err) {
  //       console.error("OpenAI design generation failed. Falling back to static design.", err);

  //       const fallback = designs.filter((d) => d.label === level);
  //       const selected = fallback[Math.floor(Math.random() * fallback.length)];

  //       set({ design: selected, code: "" });
  //     }
  //   },
  pickRandomDesign: async (level = "easy") => {
    const fallback = designs.filter((d) => d.label === level);
    const selected = fallback[Math.floor(Math.random() * fallback.length)];
    set({ design: selected, code: "" });
  },

  startGame: async () => {
    const initialLabel = roundLevels[0];
    const initialTime = getTimeForLabel(initialLabel);

    set({
      currentRound: 0,
      isGameOver: false,
      code: "",
      score: 0,
      roundLabel: initialLabel,
      timeLeft: initialTime,
    });

    await get().pickRandomDesign(initialLabel);
  },

  startNextRound: async () => {
    const nextRound = get().currentRound + 1;

    if (nextRound >= roundLevels.length) {
      set({ isGameOver: true });
      return;
    }

    const label = roundLevels[nextRound];
    const time = getTimeForLabel(label);

    set({
      currentRound: nextRound,
      roundLabel: label,
      timeLeft: time,
      code: "",
    });

    await get().pickRandomDesign(label);
  },

  decrementTime: () => {
    const current = get().timeLeft;
    if (current > 0) {
      set({ timeLeft: current - 1 });
    }
  },

  endGame: () => set({ isGameOver: true }),
}));
