'use client';
import { useState } from 'react';

export default function TargetColors({ colors }: { colors: string[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(color);
      setTimeout(() => setCopied(null), 1000);
    } catch (e) {
      console.error('Failed to copy:', e);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {colors.map((color, index) => (
        <div
          key={index}
          title={copied === color ? 'Copied!' : color}
          onClick={() => handleCopy(color)}
          className="w-6 h-6 rounded-full border cursor-pointer"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
}
