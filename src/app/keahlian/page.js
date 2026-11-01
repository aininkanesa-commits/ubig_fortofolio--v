import Link from "next/link";
import { keahlian } from "@/data/keahlian";

export const metadata = {
  title: "Keahlian",
};

export default function KeahlianPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mb-10">
    
        <h1 className="text-3xl font-bold text-utama sm:text-4xl">
          Keahlian Saya
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Berikut beberapa kemampuan yang saya pelajari dan
          kembangkan selama menempuh pendidikan di bidang
          Rekayasa Perangkat Lunak.
        </p>
      </section>

      {/* Daftar Keahlian */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {keahlian.map((item, index) => (
          <Link
            key={item.slug}
            href={`/keahlian/${item.slug}`}
            className="group flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-3xl font-bold text-utama/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="rounded-full bg-latar px-3 py-1.5 text-xs font-semibold text-utama">
                {item.level}
              </span>
            </div>

            <h2 className="wrap-break-words text-xl font-bold text-utama sm:text-2xl">
              {item.nama}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
              {item.deskripsi}
            </p>

            <div className="mt-6 border-t border-gray-100 pt-4">
              <span className="text-sm font-semibold text-utama transition group-hover:underline">
                Lihat Detail →
              </span>
            </div>
          </Link>
        ))}
      </section>

    </main>
  );
}