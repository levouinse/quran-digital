import Link from "next/link";
import Head from "next/head";
import { outfit, philosopher } from '@/common/fonts';
import Navbar from "@/components/Navbar";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Halaman tidak ditemukan. Kembali ke beranda untuk membaca Al-Quran Digital." />
        <meta name="robots" content="noindex, follow" />
        <title>404 — Quran Digital</title>
      </Head>
      <main className={`${outfit.className} bg-base-200 min-h-screen`}>
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 py-24">
          <h1 className={`${philosopher.className} text-8xl font-bold text-accent`}>404</h1>
          <p className="text-2xl mt-4">Halaman tidak ditemukan</p>
          <p className="text-center mt-2 text-base-content/70">Maaf, halaman yang Anda cari tidak ada.</p>
          <Link href="/" className="btn btn-accent mt-8">
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    </>
  );
}
