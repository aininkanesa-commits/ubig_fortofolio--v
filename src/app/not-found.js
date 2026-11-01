import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-utama">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold">
        Halaman tidak ditemukan
      </h2>

      <p className="mt-2 text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-utama px-5 py-3 font-semibold text-white"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}