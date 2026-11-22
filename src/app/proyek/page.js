
import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";
import { cacheLife } from "next/cache";

export const instant = false;

export const metadata = {
  title: "Proyek",
};

async function ambilProyek() {
  "use cache";

  cacheLife({
    stale: 60,
    revalidate: 60,
    expire: 3600,
  });

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at");

  return {
    proyek: data,
    error: error?.message ?? null,
  };
}

export default async function ProyekPage() {
  const { proyek, error } = await ambilProyek();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Proyek Saya
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Berikut beberapa hasil karya dan proyek yang saya
          kerjakan selama mempelajari Rekayasa Perangkat Lunak.
        </p>
      </section>

      {error && (
        <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-aksen">
          Data proyek gagal dimuat: {error}
        </p>
      )}

      {proyek && proyek.length === 0 && (
        <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
          Belum ada proyek di database.
        </p>
      )}

      {proyek && proyek.length > 0 && (
        <FilterProyek proyek={proyek} />
      )}
    </main>
  );
}
