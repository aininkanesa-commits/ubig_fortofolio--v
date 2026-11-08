"use client";
import { useState, useEffect } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  
  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
      setGelap(true);
    }
  }, []);

  
  function gantiTema() {
    const isDark = document.documentElement.classList.toggle("dark");
    setGelap(isDark);
    localStorage.setItem("tema", isDark ? "gelap" : "terang");
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}