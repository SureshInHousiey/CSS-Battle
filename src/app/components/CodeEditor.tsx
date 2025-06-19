'use client';

import Editor from '@monaco-editor/react';
import { useBattleStore } from '../lib/store';

export default function CodeEditor() {
  const { code, setCode } = useBattleStore();

  return (
    <div className="space-y-4">
      {/* 🚀 Instructions */}
      <div className="relative border border-cyan-500/20 bg-gradient-to-br from-cyan-900/30 to-cyan-700/10 p-4 rounded-xl shadow-inner shadow-cyan-900/30">
        <h3 className="text-cyan-400 text-lg font-bold mb-2">📘 How to Play</h3>
        <ul className="list-disc list-inside text-sm text-cyan-100 space-y-1 leading-relaxed">
          <li>
            <span className="text-white font-semibold">Replicate the target design</span> using HTML & CSS.
          </li>
          <li>
            Use the <span className="font-mono bg-cyan-800/40 px-1 py-0.5 rounded">colors</span> shown on the left panel. Click to copy.
          </li>
          <li>
            Preview your output live as you type below.
          </li>
          <li>
            Complete the design <span className="text-green-300 font-semibold">before the timer ends</span>.
          </li>
          <li>
            Hit <span className="bg-green-600 px-1 py-0.5 rounded text-white">Submit & Go to Next Round</span> to continue.
          </li>
        </ul>
        <div className="absolute top-2 right-4 text-xs text-cyan-300 opacity-70 italic">
          🔒 Inspect disabled
        </div>
      </div>

      {/* 🧑‍💻 Code Editor */}
      <Editor
        height="300px"
        defaultLanguage="html"
        value={code}
        onChange={(value) => setCode(value || '')}
        theme="vs-dark"
      />
    </div>
  );
}
