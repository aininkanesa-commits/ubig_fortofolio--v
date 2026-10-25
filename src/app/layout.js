import "./globals.css"

export const metadata = {
  title: "Ainin Elok Rahmadani | portofolio",
  description: "portofolio Ainin Elok Rahmadani, siswa smk calon Junior Web Developer dikelas Industri UBIG",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      >
      <body className="min-h-full flex flex-col bg-latar textgray-800">{children}</body>
    </html>
  );
}
