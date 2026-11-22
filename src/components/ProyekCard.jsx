
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block rounded-xl hover:shadow-md"
    >
      <Card className="h-full overflow-hidden">
        <div className="relative aspect-video w-full bg-muted">
          <Image
            src={proyek.gambar_url?.trimEnd()}
            alt={`Tangkapan layar ${proyek.judul}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>

        <CardHeader>
          <Badge>{proyek.kategori}</Badge>
          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>
          <CardDescription>
            {proyek.deskripsi}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
