"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TombolTema from "@/components/TombolTema";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

function NavbarContent() {
  const pathname = usePathname();

  return (
    <header className="bg-utama text-white">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">

        {/* Nama */}
        <Link
          href="/"
          className="text-lg font-bold sm:text-xl"
        >
          Ainin Elok Rahmadani
        </Link>

        {/* Menu Navigasi */}
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {menu.map((item) => {
            let aktif = pathname.startsWith(item.href);

            if (item.href === "/") {
              aktif = pathname === "/";
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    aktif
                      ? "font-bold text-white underline underline-offset-8"
                      : "text-gray-200 transition hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Tombol Tema */}
        <TombolTema />

      </nav>
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarContent />
    </Suspense>
  );
}