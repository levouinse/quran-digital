import { useState, useEffect } from 'react';
import { getLastRead } from '@/common/storage';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import { outfit, philosopher } from '@/common/fonts';

export default function LastRead() {
  const [lastRead, setLastRead] = useState(null);

  useEffect(() => {
    setLastRead(getLastRead());
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lanjutkan membaca Al-Quran dari posisi terakhir Anda" />
        <meta name="robots" content="noindex, follow" />
        <title>Terakhir Dibaca — Quran Digital</title>
      </Head>
      <main className={`${outfit.className} bg-base-200 min-h-screen`}>
        <Navbar />
        <div className="px-6 md:px-24 py-8">
          <h1 className={`${philosopher.className} text-3xl font-bold mb-6`}>Terakhir Dibaca</h1>
          {!lastRead ? (
            <p className="text-center py-12">Belum ada riwayat bacaan.</p>
          ) : (
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Surah {lastRead.surah}, Ayat {lastRead.ayat}</h2>
                <p className="text-sm opacity-70">Terakhir dibaca: {new Date(lastRead.date).toLocaleString('id-ID')}</p>
                <div className="card-actions justify-end">
                  <Link href={`/${lastRead.surah}?ayat=${lastRead.ayat}`} className="btn btn-accent">
                    Lanjutkan Membaca
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
