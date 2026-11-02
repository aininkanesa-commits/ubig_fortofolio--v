"use client";

import { Suspense, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/keahlian", label: "Keahlian" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

function NavbarContent() {
  const pathname = usePathname();
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  return (
    <header className="bg-utama text-white">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:flex-nowrap">

        
        <Link
          href="/"
          onClick={() => setMenuTerbuka(false)}
          className="text-xl font-bold"
        >
          Ainin Elok Rahmadani
        </Link>

        
        <button
          type="button"
          onClick={() => setMenuTerbuka(!menuTerbuka)}
          aria-label="Menu navigasi"
          aria-expanded={menuTerbuka}
          className="rounded-lg border border-white/40 px-3 py-1 text-2xl md:hidden"
        >
          {menuTerbuka ? "×" : "☰"}
        </button>

       
        <ul
          className={`${
            menuTerbuka ? "flex" : "hidden"
          } w-full flex-col gap-3 pt-2 md:flex md:w-auto md:flex-row md:flex-wrap md:items-center md:gap-x-5 md:gap-y-2 md:pt-0`}
        >
          {menu.map((item) => {
            let kelas = "text-gray-200 hover:text-white";

            let aktif = pathname.startsWith(item.href);

            if (item.href === "/") {
              aktif = pathname === "/";
            }

            if (aktif) {
              kelas =
                "font-bold text-white underline underline-offset-8";
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuTerbuka(false)}
                  className={kelas}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
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