"use client";
import { useEffect } from "react";

export default function ScreenProtection() {
  useEffect(() => {
    // Disable right click
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // Block common keys
    const handleKeyDown = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Blur when tab inactive
    const handleVisibility = () => {
      document.body.style.filter = document.hidden
        ? "blur(8px)"
        : "none";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
}
