
import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";

export const instant = false;

export const metadata = {
  title: "Proyek",
};

export default async function ProyekPage() {
  const { data: proyek, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at");

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Header */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Proyek Saya
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Berikut beberapa hasil karya dan proyek yang saya
          kerjakan selama mempelajari Rekayasa Perangkat Lunak.
        </p>
      </section>

      {/* Pesan jika terjadi error */}
      {error && (
        <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-aksen">
          Data proyek gagal dimuat: {error.message}
        </p>
      )}

      {/* Pesan jika database masih kosong */}
      {proyek && proyek.length === 0 && (
        <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
          Belum ada proyek di database.
        </p>
      )}

      {/* Daftar Proyek */}
      {proyek && proyek.length > 0 && (
        <FilterProyek proyek={proyek} />
      )}

    </main>
  );
}
