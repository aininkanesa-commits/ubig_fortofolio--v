"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  useEffect(() => {
    const temaTersimpan = localStorage.getItem("tema");
    const gunakanGelap = temaTersimpan === "gelap";

    document.documentElement.classList.toggle("dark", gunakanGelap);
    setGelap(gunakanGelap);
  }, []);

  function gantiTema() {
    const temaBaru = !gelap;

    document.documentElement.classList.toggle("dark", temaBaru);
    localStorage.setItem("tema", temaBaru ? "gelap" : "terang");
    setGelap(temaBaru);
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      aria-pressed={gelap}
      className="w-full rounded-lg border border-white px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-utama sm:w-auto"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}