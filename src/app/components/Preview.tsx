"use client";

import { useEffect, useRef, useState } from "react";
import { useBattleStore } from "../lib/store";

export default function Preview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { code } = useBattleStore(); // ✅ Only use user code
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    try {
      setError(null); // clear any previous error
      doc.open();
      doc.write(code); // ✅ Just write what user wrote in the editor
      doc.close();
    } catch {
      setError('Unknown error');
    }
  }, [code]);

  return (
    <div>
      <iframe ref={iframeRef} className="w-full h-96 border rounded bg-white" />
      {error && (
        <div className="mt-2 text-sm text-red-500 bg-red-100 p-2 rounded">
          ⚠️ Syntax Error: {error}
        </div>
      )}
    </div>
  );
}
