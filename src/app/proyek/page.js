import { proyek } from "@/data/proyek";
import ProyekCard from "@/components/ProyekCard";

export const metadata = {
  title: "Proyek",
};

export default function ProyekPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Header */}
      <section className="mb-10">
        
        <h1 className="text-3xl font-bold text-utama sm:text-4xl">
          Proyek Saya
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Berikut beberapa hasil karya dan proyek yang saya
          kerjakan selama mempelajari Rekayasa Perangkat Lunak.
        </p>
      </section>

      {/* Daftar Proyek */}
      <section className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proyek.map((item) => (
          <div key={item.slug} className="min-w-0">
            <ProyekCard proyek={item} />
          </div>
        ))}
      </section>

    </main>
  );
}