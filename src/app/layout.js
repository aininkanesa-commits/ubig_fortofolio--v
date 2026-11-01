import "./globals.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
      >
      <body className="min-h-full flex flex-col bg-latar textgray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
