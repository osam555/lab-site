"use client";

import { useEffect } from "react";

const LABEL_DEFAULT = "복사 📋";
const LABEL_COPIED = "복사됨 ✅";

/**
 * Attaches copy-to-clipboard handlers to all .prompt-copy-btn buttons
 * via event delegation. Needed because rehype-raw strips inline onclick.
 */
export function PromptCopyHandler() {
  useEffect(() => {
    // Set initial label on all copy buttons
    document.querySelectorAll(".prompt-copy-btn").forEach((btn) => {
      btn.textContent = LABEL_DEFAULT;
    });

    function handleClick(e: MouseEvent) {
      const btn = (e.target as HTMLElement).closest(".prompt-copy-btn");
      if (!btn) return;

      const box = btn.closest(".prompt-box");
      if (!box) return;

      const body = box.querySelector(".prompt-box-body");
      if (!body) return;

      const text = body.textContent?.trim() ?? "";

      navigator.clipboard
        .writeText(text)
        .then(() => {
          btn.textContent = LABEL_COPIED;
          setTimeout(() => {
            btn.textContent = LABEL_DEFAULT;
          }, 1500);
        })
        .catch(() => {
          // Fallback for non-HTTPS or denied permission
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          btn.textContent = LABEL_COPIED;
          setTimeout(() => {
            btn.textContent = LABEL_DEFAULT;
          }, 1500);
        });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

