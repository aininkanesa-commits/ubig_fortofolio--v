"use client";

import { useState } from "react";
import SkillCard from "@/components/SkillCard";

const daftarLevel = ["Semua", "Dasar", "Menengah", "Mahir"];

export default function FilterKeahlian({ skills }) {
  const [levelAktif, setLevelAktif] = useState("Semua");

  const keahlianTerfilter =
    levelAktif === "Semua"
      ? skills
      : skills.filter((item) => item.level === levelAktif);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {daftarLevel.map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setLevelAktif(level)}
            className={
              levelAktif === level
                ? "rounded-lg bg-aksen px-4 py-2 font-semibold text-white"
                : "rounded-lg border border-utama px-4 py-2 font-semibold text-utama dark:text-sky-200 transition hover:bg-utama hover:text-white"
            }
          >
            {level}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Menampilkan {keahlianTerfilter.length} keahlian
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {keahlianTerfilter.map((item) => (
          <SkillCard
            key={item.slug}
            nama={item.nama}
            level={item.level}
          />
        ))}
      </div>
    </div>
  );
}