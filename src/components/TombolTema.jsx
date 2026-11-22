"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
  <Button
    variant="outline"
    onClick={gantiTema}
    className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
  >
    {gelap ? "Mode Terang" : "Mode Gelap"}
  </Button>
);
}