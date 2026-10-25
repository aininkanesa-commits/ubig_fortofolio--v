import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";
import Hero from "@/components/Hero";


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

const keahlian = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwal = [
  { hari: "Senin", waktu: "19.00–21.00", kegiatan: "Belajar dan mengerjakan tugas" },
  { hari: "Selasa", waktu: "19.00–21.00", kegiatan: "Belajar pemrograman" },
  { hari: "Rabu", waktu: "19.00–21.00", kegiatan: "Mengerjakan proyek website" },
  { hari: "Kamis", waktu: "19.00–21.00", kegiatan: "Belajar desain" },
  { hari: "Jumat", waktu: "19.30–20.30", kegiatan: "Evaluasi hasil belajar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-latar">
      <div className="mx-auto max-w-5xl space-y-5 px-5 py-10">
        <Hero
        nama="Ainin Elok Rahmadani"
        tagline="Siswi kelas X di SMKN 1 Kepanjen yang tertarik pada web development dan desain."
        />
          
        <Kartu judul="Tentang Saya">
          <p className="leading-7 text-gray-700">
            Haiii! Aku Ainin, siswi RPL yang suka website dan desain. 
            Aku senang mencoba hal baru, walaupun kadang coding bikin pusing. 
            But it's okay, masih proses jadi suhuuu 😲
          </p>
        </Kartu>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {hobi.map((item) => (
            <li key={item}>{item}</li>
          ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="mb-3 text-gray-700">
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah
              yang saya rencanakan:
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-gray-700">
              {citaCita.map((item) => (
            <li key={item}>{item}</li>
              ))}
            </ol>
          </Kartu>
        </div>

      
        <Kartu judul="Keahlian">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {keahlian.map((item) => (
              <SkillCard
                key={item.nama}
                nama={item.nama}
                level={item.level}
              />
            ))}
          </div>
        </Kartu>

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
                  <tr key={item.hari} className="border-b border-gray-200">
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

      <footer className="bg-utama px-4 py-5 text-center text-sm text-white">
        © 2026 Ainin Elok Rahmadani. Dibuat dengan Next.js.
      </footer>
    </main>
  );
}