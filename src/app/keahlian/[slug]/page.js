
import Link from "next/link";
import { notFound } from "next/navigation";
import { keahlian } from "@/data/keahlian";

// Membuat halaman detail berdasarkan data keahlian
export function generateStaticParams() {
  return keahlian.map((item) => ({
    slug: item.slug,
  }));
}

// Mengatur judul halaman
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const item = keahlian.find(
    (item) => item.slug === slug
  );

  return {
    title: item ? item.nama : "Keahlian Tidak Ditemukan",
  };
}

// Halaman detail keahlian
export default async function DetailKeahlianPage({ params }) {
  const { slug } = await params;

  const item = keahlian.find(
    (item) => item.slug === slug
  );

  if (!item) {
    notFound();
  }

  return (
    <main className="py-10">
      <div className="max-w-2xl rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm">

        <p className="text-sm font-semibold text-gray-500">
          DETAIL KEAHLIAN
        </p>

        <h1 className="mt-3 text-3xl font-bold text-utama dark:text-sky-200">
          {item.nama}
        </h1>

        <span className="mt-4 inline-block rounded-full bg-latar dark:bg-gray-900 px-4 py-2 text-sm font-semibold text-utama dark:text-sky-200">
          {item.level}
        </span>

        <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
          {item.deskripsi}
        </p>

        <Link
          href="/keahlian"
          className="mt-8 inline-block rounded-lg bg-utama px-5 py-3 font-semibold text-white"
        >
          ← Kembali ke Keahlian
        </Link>

      </div>
    </main>
  );
}
