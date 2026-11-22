import "./globals.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
variable: "--font-sans",
subsets: ["latin"],
});
const geistMono = Geist_Mono({
variable: "--font-mono",
subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ainin Elok Rahmadani | Portofolio",
    template: "%s | Ainin Elok Rahmadani",
  },
  description:
    "Portofolio Ainin Elok Rahmadani, siswi SMK calon Junior Web Developer di Kelas Industri UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
      >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
