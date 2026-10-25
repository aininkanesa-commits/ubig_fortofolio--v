import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-row items-center gap-6 py-5 text-left">
      <Image
        src="/image.png"
        alt={`Foto profil ${nama}`}
        width={220}
        height={220}
        priority
        className="h-49 w-49 shrink-0 rounded-full border-4 border-red-600 object-cover"
      />

      <div className="min-w-0">
        <h1 className="text-4xl font-bold text-utama md:text-6xl">
          Haloo, Saya {nama}!
        </h1>

        <p className="mt-4 text-gray-600">
          {tagline}
        </p>
      </div>
    </section>
  );
}