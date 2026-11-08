import FromKontak from "@/components/FromKontak";

export const metadata = {
  title: "Kontak",
  description: "Halaman kontak Ainin Elok Rahmadani.",
};

export default function KontakPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-8 text-left ">
        <h1 className="text-3xl font-bold text-utama dark:text-sky-200 dark:text-white">
          Hubungi Saya
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400 dark:text-gray-300">
          Punya pertanyaan, saran, atau ingin bekerja sama? Silakan isi formulir di bawah ini atau hubungi saya melalui email dan media sosial.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {/* From Kontak */}
        <FromKontak />

        {/* Informasi Kontak */}
        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold text-utama dark:text-sky-200 dark:text-white">
            Temukan Saya
          </h2>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:aininkanesa@gmail.com"
                className="text-aksen hover:underline"
              >
                aininkanesa@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold">GitHub</h3>
              <a
                href="https://github.com/aininkanesa-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aksen hover:underline"
              >
                GitHub →
              </a>
            </div>

            <div>
              <h3 className="font-semibold">Instagram</h3>
              <a
                href="https://www.instagram.com/er_ayz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aksen hover:underline"
              >
                @er_ayz
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}