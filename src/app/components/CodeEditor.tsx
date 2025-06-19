'use client';

// import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useBattleStore } from '../lib/store';

export default function CodeEditor() {
  const { code, setCode } = useBattleStore();

  return (
    <Editor
      height="300px"
      defaultLanguage="html"
      value={code}
      onChange={(value) => setCode(value || '')}
      theme="vs-dark"
    />
  );
}
