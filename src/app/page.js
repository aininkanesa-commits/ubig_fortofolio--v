import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import FilterKeahlian from "@/components/FilterKeahlian";
import { keahlian as skills } from "@/data/keahlian";
import { proyek } from "@/data/proyek";

const proyekTerbaru = proyek.slice(-3);

export default function Home() {
  return (
    <main className="min-h-screen bg-latar">
      <div className="mx-auto max-w-5xl space-y-5 px-5 py-10">

        <Hero
          nama="Ainin Elok Rahmadani"
          tagline="Siswi kelas X di SMKN 1 Kepanjen yang tertarik pada web development dan desain."
        />

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama">
            Keahlian
          </h2>

          <FilterKeahlian skills={skills} />
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama">
            Proyek Saya
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>

          <Link
            href="/proyek"
            className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white"
          >
            Lihat semua proyek
          </Link>
        </section>

      </div>
    </main>
  );
}