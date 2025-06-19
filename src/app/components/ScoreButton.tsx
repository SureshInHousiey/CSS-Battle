'use client';

import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';

export default function ScoreButton() {
  const targetRef = useRef<HTMLIFrameElement>(null);
  const outputRef = useRef<HTMLIFrameElement>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  const captureScreenshot = async (iframe: HTMLIFrameElement) => {
    const doc = iframe.contentDocument;
    if (!doc) return null;

    const body = doc.body;
    const canvas = await html2canvas(body, {
      backgroundColor: null,
      scale: 1,
    });

    return canvas.toDataURL('image/png');
  };

  const calculateScore = async () => {
    if (!targetRef.current || !outputRef.current) return;

    const [targetImg, userImg] = await Promise.all([
      captureScreenshot(targetRef.current),
      captureScreenshot(outputRef.current),
    ]);

    if (!targetImg || !userImg) return alert('Failed to capture screenshots');

    const res = await fetch('/api/score', {
      method: 'POST',
      body: JSON.stringify({
        target: targetImg,
        user: userImg,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.accuracy) {
      setAccuracy(Number(data.accuracy));
    }
  };

  return (
    <div className="mt-4 space-y-2">
      <button
        onClick={calculateScore}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Calculate Accuracy
      </button>

      {accuracy !== null && (
        <div className="text-xl font-semibold text-green-700">
          Accuracy: {accuracy}%
        </div>
      )}

      {/* Hidden iframes (copies for screenshot) */}
      <iframe ref={targetRef} id="target-frame" className="hidden" />
      <iframe ref={outputRef} id="user-frame" className="hidden" />
    </div>
  );
}
