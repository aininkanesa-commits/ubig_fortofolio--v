import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-5 py-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
      <Image
        src="/image.png"
        alt={`Foto profil ${nama}`}
        width={220}
        height={220}
        priority
        className="h-36 w-36 shrink-0 rounded-full border-4 border-red-600 object-cover sm:h-44 sm:w-44 md:h-48 md:w-48"
      />

      <div className="min-w-0">
        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 wrap-break-words sm:text-4xl md:text-6xl">
          Haloo, Saya {nama}!
        </h1>

        <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:text-base">
          {tagline}
        </p>
      </div>
    </section>
  );
}