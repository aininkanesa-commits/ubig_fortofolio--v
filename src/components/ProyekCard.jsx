import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Gambar */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={proyek.gambar}
          alt={proyek.judul}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Isi Kartu */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-latar dark:bg-gray-900 px-3 py-1 text-xs font-semibold text-utama dark:text-sky-200">
            {proyek.kategori}
          </span>

          <span className="text-xs text-gray-500">
            {proyek.minggu}
          </span>
        </div>

        <h2 className="text-lg font-bold text-utama dark:text-sky-200 sm:text-xl">
          {proyek.judul}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {proyek.deskripsi}
        </p>

        <div className="mt-5 border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-utama dark:text-sky-200">
            Lihat Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}