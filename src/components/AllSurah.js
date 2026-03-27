import axios from "axios";
import { outfit } from '@/common/fonts';
import useSWR from "swr";
import SurahCard from "./SurahCard";
import Link from "next/link";
import SurahCardSkeleton from "./SurahCardSkeleton";
import { useState } from "react";

const fetcher = url => axios(url).then(x => x.data);

const normalizeText = (text) => {
  return text.toLowerCase()
    .replace(/^al[\s-]?/i, '')
    .replace(/['\-\s]/g, '')
    .trim();
};

export default function AllSurah() {
    const { data, error } = useSWR(
      'https://quran-api.jstnlt.my.id/surah?withoutAyat=1', 
      fetcher,
      {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 3600000, // 1 hour
      }
    );
    const [searchQuery, setSearchQuery] = useState('');

    if (error) return <div className={`${outfit.className} p-8`}>Gagal memuat... Coba lagi dalam beberapa saat!</div>
    if (!data) return (
        <>
            <div className="bg-base-200 dark:bg-base-100 px-4 md:px-8 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map((x, idx) => {
                    return <div key={idx}><SurahCardSkeleton /></div>
                })}
            </div>
        </>
    )

    const filteredData = data.filter(surah => {
        if (!searchQuery) return true;
        const query = normalizeText(searchQuery);
        const namaLatin = normalizeText(surah.nama.latin);
        const arti = normalizeText(surah.arti);
        return namaLatin.includes(query) || arti.includes(query) || surah.nomor.toString() === searchQuery;
    });

    return (
        <>
            <div className="px-4 md:px-8 lg:px-16 pt-8">
                <input
                    id="search-surah"
                    name="search-surah"
                    type="text"
                    placeholder="Cari surah (contoh: fatihah, al-baqarah, pembuka)..."
                    className="input input-bordered w-full rounded-full text-black dark:text-white"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    autoComplete="off"
                    aria-label="Cari surah"
                />
            </div>
            <div className="bg-base-200 dark:bg-base-100 px-4 md:px-8 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
               {filteredData.length === 0 ? (
                   <div className="col-span-full text-center py-8">Surah tidak ditemukan</div>
               ) : (
                   filteredData.map((x, idx) => {
                       return (
                           <div key={idx}>
                               <Link href={`/${x.nomor}`}>
                                   <SurahCard nomor={x.nomor} nama={x.nama.latin} arti={x.arti} arab={x.nama.arab} lokasi={x.lokasi} jumlahAyat={x.jumlah_ayat} />
                               </Link>
                           </div>
                       )
                   })
               )}
            </div>
        </>
    )
}