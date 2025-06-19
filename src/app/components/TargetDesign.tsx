'use client';
import { useBattleStore } from '../lib/store';
import { useEffect, useRef } from 'react';

export default function TargetDesign() {
  const { design } = useBattleStore();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current && design) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(design.html);
        doc.close();
      }
    }
  }, [design]);

  if (!design) return <p>No design loaded yet.</p>;

  return (
    <iframe
      ref={iframeRef}
      className="border w-full h-[200px] bg-white"
      title="target"
    />
  );
}
