import FromKontak from "@/components/FromKontak";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Halaman kontak Ainin Elok Rahmadani.",
};

export default function KontakPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-bold text-primary">
          Hubungi Saya
        </h1>

        <p className="mt-3 text-muted-foreground">
          Punya pertanyaan, saran, atau ingin bekerja sama? Silakan isi formulir di bawah ini atau hubungi saya melalui email dan media sosial.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
        {/* Form Kontak */}
        <Card>
          <CardContent>
            <FromKontak />
          </CardContent>
        </Card>

        {/* Informasi Kontak */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya
            </CardTitle>
          </CardHeader>

          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}