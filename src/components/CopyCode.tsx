"use client";

import { useState } from "react";

/** The labels are passed in, so the button shows the language of the page (see `blocks.copy` in src/i18n/). */
export function CopyCode({ code, label = "Copy", copiedLabel = "Copied ✓" }: { code: string; label?: string; copiedLabel?: string }) {
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
      {copied ? copiedLabel : label}
    </button>
  );
}
