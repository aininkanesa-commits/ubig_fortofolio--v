export const metadata = {
  title: "Kontak",
  description:
    "Hubungi Ainin Elok Rahmadani melalui form kontak, email, atau GitHub.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mb-10">
    
        <h1 className="text-3xl font-bold text-utama sm:text-4xl">
          Hubungi Saya
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
          Terima kasih telah mengunjungi portofolio saya.
          Jika ingin bertanya, berdiskusi, atau mengenal lebih
          jauh tentang karya saya, silakan hubungi melalui
          informasi berikut.
        </p>
      </section>

      {/* Konten Kontak */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">

        {/* Form Kontak */}
        <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-2 text-xl font-bold text-utama sm:text-2xl">
            Form Kontak
          </h2>

          <p className="mb-6 text-sm leading-6 text-gray-500">
            Silakan isi form berikut untuk menyampaikan pesan.
          </p>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-semibold text-utama"
              >
                Nama lengkap
              </label>

              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Masukkan nama lengkap"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition focus:border-utama focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-utama"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="nama@email.com"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition focus:border-utama focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="subjek"
                className="block text-sm font-semibold text-utama"
              >
                Subjek
              </label>

              <input
                type="text"
                id="subjek"
                name="subjek"
                placeholder="Masukkan subjek"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition focus:border-utama focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="pesan"
                className="block text-sm font-semibold text-utama"
              >
                Pesan
              </label>

              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                maxLength={300}
                placeholder="Tuliskan pesan kamu..."
                required
                className="mt-2 w-full resize-y rounded-lg border border-gray-300 bg-white p-3 text-sm outline-none transition focus:border-utama focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-utama px-5 py-3 font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Kirim Pesan →
            </button>
          </form>

        
        </section>

        {/* Informasi Kontak */}
        <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-3 text-xl font-bold text-utama sm:text-2xl">
            Temukan Saya
          </h2>

          <p className="text-sm leading-7 text-gray-600">
            Kamu juga dapat melihat profil dan menghubungi
            saya melalui beberapa platform berikut.
          </p>

          <div className="mt-7 space-y-6">

            {/* Email */}
            <div>
              <p className="mb-2 text-sm font-semibold text-utama">
                Email
              </p>

              <a
                href="mailto:aininkanesa@gmail.com"
                className="break-all text-sm font-medium text-aksen hover:underline"
              >
                aininkanesa@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div>
              <p className="mb-2 text-sm font-semibold text-utama">
                GitHub
              </p>

              <a
                href="https://github.com/aininkanesa-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm font-medium text-aksen hover:underline"
              >
                github.com/aininkanesa-commits
              </a>
            </div>

            {/* Instagram */}
            <div>
              <p className="mb-2 text-sm font-semibold text-utama">
                Instagram
              </p>

              <a
                href="https://www.instagram.com/er_ayz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-aksen hover:underline"
              >
                @er_ayz
              </a>
            </div>

          </div>

          <div className="mt-8 rounded-xl bg-gray-50 p-5">
            <h3 className="font-semibold text-utama">
              Terima Kasih!
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Saya terbuka untuk belajar, berbagi ide,
              dan mendapatkan pengalaman baru di bidang
              teknologi dan desain.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}