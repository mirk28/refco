"use client";

import { useState } from "react";

export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked – user can still select the code manually */
    }
  };
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
