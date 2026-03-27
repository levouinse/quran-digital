import { useState, useEffect } from 'react';
import { getBookmarks, removeBookmark } from '@/common/storage';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import { outfit, philosopher, lpmq } from '@/common/fonts';
import { BsTrash } from 'react-icons/bs';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);

  const handleRemove = (surah, ayat) => {
    removeBookmark(surah, ayat);
    setBookmarks(getBookmarks());
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bookmark ayat favorit Anda dari Al-Quran Digital" />
        <title>Bookmark — Quran Digital</title>
      </Head>
      <main className={`${outfit.className} bg-base-200 min-h-screen`}>
        <Navbar />
        <div className="px-6 md:px-24 py-8">
          <h1 className={`${philosopher.className} text-3xl font-bold mb-6`}>Bookmark Ayat</h1>
          {bookmarks.length === 0 ? (
            <p className="text-center py-12">Belum ada bookmark. Mulai tandai ayat favorit Anda!</p>
          ) : (
            <div className="space-y-4">
              {bookmarks.map((b, idx) => (
                <div key={idx} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <Link href={`/${b.surah}?ayat=${b.ayat}`}>
                      <div className="text-right mb-4">
                        <p className={`${lpmq.className} text-2xl leading-relaxed mb-2`}>{b.arab}</p>
                      </div>
                      <p className="text-sm mb-2">{b.arti}</p>
                      <p className="text-xs opacity-70">Surah {b.surah}, Ayat {b.ayat}</p>
                    </Link>
                    <div className="card-actions justify-end mt-2">
                      <button onClick={() => handleRemove(b.surah, b.ayat)} className="btn btn-sm btn-error" aria-label="Hapus bookmark">
                        <BsTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
