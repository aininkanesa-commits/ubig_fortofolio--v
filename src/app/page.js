
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export const instant = false;

export default async function Home() {
  const { data: skills } = await supabase
  .from("skills")
  .select("*")
  .order("id");

  const { data: proyekTerbaru, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="min-h-screen bg-background dark:bg-gray-900">
      <div className="mx-auto max-w-5xl space-y-5 px-5 py-10">

        <Hero
          nama="Ainin Elok Rahmadani"
          tagline="Siswi kelas X di SMKN 1 Kepanjen yang tertarik pada web development dan desain."
        />

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-primary dark:text-sky-200">
            Keahlian
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills && skills.map((item) => (
            <SkillCard
            key={item.id}
            nama={item.nama}
            level={item.level}
            />
          ))}
      </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            Proyek Saya
          </h2>

          {error && (
            <p className="text-aksen">
              Data proyek gagal dimuat: {error.message}
            </p>
          )}

          {proyekTerbaru && proyekTerbaru.length === 0 && (
            <p className="text-muted-foreground">
              Belum ada proyek di database.
            </p>
          )}

          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru?.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>

          <Link
            href="/proyek"
            className={buttonVariants({
              size: "lg",
              className: "mt-6",
            })}
          >
            Lihat semua proyek
          </Link>
        </section>

      </div>
    </main>
  );
}
