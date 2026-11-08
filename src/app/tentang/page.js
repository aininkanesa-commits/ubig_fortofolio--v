import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang",
};

const hobi = [
  "Cooking snack",
  "Bersepeda",
  "Membaca cerita",
];

const citaCita = [
  "Mengembangkan kemampuan web development",
  "Membuat portofolio yang lebih baik",
  "Menjadi Junior Web Developer",
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00–21.00",
    kegiatan: "Belajar dan mengerjakan tugas",
  },
  {
    hari: "Selasa",
    waktu: "19.00–21.00",
    kegiatan: "Belajar pemrograman",
  },
  {
    hari: "Rabu",
    waktu: "19.00–21.00",
    kegiatan: "Mengerjakan proyek website",
  },
  {
    hari: "Kamis",
    waktu: "19.00–21.00",
    kegiatan: "Belajar desain",
  },
  {
    hari: "Jumat",
    waktu: "19.30–20.30",
    kegiatan: "Evaluasi hasil belajar",
  },
];

export default function Tentang() {
  return (
    <main className="min-h-screen bg-latar dark:bg-gray-900">
      <div className="mx-auto max-w-5xl space-y-5 px-5 py-10">

        <h1 className="text-3xl font-bold text-utama dark:text-sky-200">
          Tentang Saya
        </h1>

        <Kartu judul="Perkenalan">
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            Haiii! Aku Ainin, siswi RPL yang suka website dan desain.
            Aku senang mencoba hal baru, walaupun kadang coding bikin pusing.
            But it's okay, masih proses jadi suhuuu 😲
          </p>
        </Kartu>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <Kartu judul="Hobi">
            <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Menjadi <strong>Full Stack Web Developer</strong>.
              Langkah yang saya rencanakan:
            </p>

            <ol className="list-decimal space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              {citaCita.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>

        </div>

        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-utama text-white">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.map((item) => (
                  <tr
                    key={item.hari}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="p-3">{item.hari}</td>
                    <td className="p-3">{item.waktu}</td>
                    <td className="p-3">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>

      </div>
    </main>
  );
}