import "./globals.css"  
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";


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
      >
      <body className="min-h-screen flex flex-col bg-latar dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
