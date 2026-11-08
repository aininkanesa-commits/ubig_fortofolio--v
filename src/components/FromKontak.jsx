"use client";

import { useState } from "react";

export default function FromKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState("");

  function kirim(event) {
    event.preventDefault();

    const kesalahan = {};

    if (!nama.trim()) {
      kesalahan.nama = "Nama wajib diisi.";
    }

    if (!email.trim() || !email.includes("@")) {
      kesalahan.email = "Email harus memuat tanda @, contoh nama@email.com.";
    }

    if (telepon.replace(/\D/g, "").length < 10) {
      kesalahan.telepon = "Nomor HP minimal 10 angka.";
    }

    if (!keperluan) {
      kesalahan.keperluan = "Pilih salah satu keperluan.";
    }

    if (pesan.trim().length < 10) {
      kesalahan.pesan = "Pesan minimal 10 karakter.";
    }

    setError(kesalahan);
    setBerhasil("");

    if (Object.keys(kesalahan).length === 0) {
      setBerhasil("Pesan berhasil divalidasi. Terima kasih sudah menghubungi saya!");
      setNama("");
      setEmail("");
      setTelepon("");
      setKeperluan("");
      setPesan("");
    }
  }

  const kelasInput =
    "w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-3 text-gray-800 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white";

  const kelasError = "mt-2 text-sm text-red-700 dark:text-red-400";

  return (
    <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    
      <form onSubmit={kirim} noValidate className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: Ainin Elok Rahmadani"
            className={kelasInput}
          />
          {error.nama && <p className={kelasError}>{error.nama}</p>}
        </div>

        <div>
          <label className="mb-2 block font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Contoh: nama@email.com"
            className={kelasInput}
          />
          {error.email && <p className={kelasError}>{error.email}</p>}
        </div>

        <div>
          <label className="mb-2 block font-medium">Nomor HP</label>
          <input
            type="tel"
            inputMode="numeric"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value.replace(/\D/g, ""))}
            placeholder="081234567890"
            className={kelasInput}
          />
          {error.telepon && <p className={kelasError}>{error.telepon}</p>}
        </div>

        <div>
          <label className="mb-2 block font-medium">Keperluan</label>
          <select
            value={keperluan}
            onChange={(e) => setKeperluan(e.target.value)}
            className={kelasInput}
          >
            <option value="">-- Pilih keperluan --</option>
            <option value="Bertanya">Bertanya</option>
            <option value="Kerja sama / Proyek">Kerja sama / Proyek</option>
          </select>
          {error.keperluan && (
            <p className={kelasError}>{error.keperluan}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-medium">Pesan</label>
          <textarea
            rows={5}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis pesan Anda di sini..."
            className={kelasInput}
          />
          {error.pesan && <p className={kelasError}>{error.pesan}</p>}
        </div>

        {berhasil && (
          <p className="text-sm text-green-700 dark:text-green-400">
            {berhasil}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-aksen px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}