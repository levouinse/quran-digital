import { useRouter } from "next/router"
import axios from "axios";
import useSWR from "swr";
import Navbar from "@/components/Navbar";
import { parseArti } from "@/common/functions";
import { outfit, philosopher, lpmq } from '@/common/fonts';
import Head from "next/head";
import NextPreviousButton from "@/components/NextPreviousButton";
import SurahSkeleton from "@/components/SurahSkeleton";
import { BsBookmark, BsBookmarkFill, BsShare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { addBookmark, removeBookmark, isBookmarked, setLastRead } from '@/common/storage';

const fetcher = url => axios(url).then(x => x.data);

export async function getStaticPaths() {
    const paths = Array.from({ length: 114 }, (_, i) => ({
        params: { surah: String(i + 1) }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps() {
    return { props: {} };
}

export default function Surah() {
    let router = useRouter();
    let { ayat, surah } = router.query;
    const [bookmarks, setBookmarks] = useState({});

    const { data, error } = useSWR(
      surah ? `https://quran-api.jstnlt.my.id/surah/${surah}` : null, 
      fetcher,
      {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000,
      }
    )

    useEffect(() => {
        if (data && surah) {
            setLastRead(surah, ayat || 1);
        }
    }, [data, surah, ayat]);

    if (!surah) return <><Navbar /><div className={`p-8`}><SurahSkeleton /></div></>
    if (error) return <><Navbar /><div className={`${outfit.className} p-8`}>Gagal memuat... Coba lagi dalam beberapa saat!</div></>
    if (!data) return <><Navbar /><div className={`p-8`}><SurahSkeleton /></div></>

    if(ayat) router.replace(`/${surah}#${ayat}`)

    const toggleBookmark = (ayatNum, arab, arti) => {
        if (isBookmarked(surah, ayatNum)) {
            removeBookmark(surah, ayatNum);
        } else {
            addBookmark(surah, ayatNum, arab, arti);
        }
        setBookmarks({...bookmarks, [ayatNum]: !bookmarks[ayatNum]});
    };

    const shareAyat = (ayatNum, arab, arti) => {
        const text = `${data.nama.latin} (${data.nama.arab}) Ayat ${ayatNum}\n\n${arab}\n\n${arti}\n\nhttps://quran.andifarel.biz.id/${surah}?ayat=${ayatNum}`;
        if (navigator.share) {
            navigator.share({ text });
        } else {
            navigator.clipboard.writeText(text);
            alert('Ayat disalin ke clipboard!');
        }
    };

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={`Baca Surah ${data.nama.latin} (${data.arti}) dengan terjemahan Bahasa Indonesia. ${data.jumlah_ayat} ayat, diturunkan di ${data.lokasi}.`} />
          <meta name="keywords" content={`surah ${data.nama.latin}, ${data.nama.arab}, ${data.arti}, quran surah ${data.nomor}`} />
          <meta property="og:title" content={`${data.nama.latin} — Quran Digital`} />
          <meta property="og:description" content={`Baca Surah ${data.nama.latin} (${data.arti}) dengan terjemahan Bahasa Indonesia`} />
          <link rel="canonical" href={`https://quran.andifarel.biz.id/${surah}`} />
          <title>{data.nama.latin} — Quran Digital</title>
        </Head>
        <main className={outfit.className}>
          <Navbar />
          <div className="px-6 md:px-24">
            <NextPreviousButton data={data} />

            <h2 className={`${philosopher.className} text-3xl text-center font-bold`}>{data.nama.latin} <span className={`${lpmq.className} text-sm`}>{data.nama.arab}</span></h2>
            <p className="text-center">{data.lokasi} &#x2022; {data.arti} &#x2022; {data.jumlah_ayat} Ayat</p>

            <div className="pt-16">
              {data.ayat.map((x, idx) => {
                  return (
                      <div className="py-8 " key={idx}>
                          <section id={x.nomor}>
                              <div className="text-right">
                                  <p className={`${lpmq.className} text-3xl leading-[2.5em] dark:text-white`}>{x.arab}</p>
                                  <p>{x.latin}</p>
                              </div>
                              <div className="pt-8">
                                  <p dangerouslySetInnerHTML={{ __html: parseArti(x.nomor, x.arti) }} />
                                  {x.fn ? <>
                                    <p className="mt-2 italic text-xs font-bold">Footnote:</p>
                                      <div>
                                        <ul className="list-disc ml-5 text-xs">
                                          {x.fn.map((xx, idxx) => {
                                            return(
                                              <li key={idxx} className="italic">{xx}</li>
                                            )
                                          })}
                                        </ul>
                                      </div>
                                  </> : ''}
                                  <div className="flex gap-2 mt-4">
                                    <button onClick={() => toggleBookmark(x.nomor, x.arab, x.arti)} className="btn btn-sm btn-outline" aria-label="Bookmark ayat">
                                      {isBookmarked(surah, x.nomor) ? <BsBookmarkFill /> : <BsBookmark />}
                                    </button>
                                    <button onClick={() => shareAyat(x.nomor, x.arab, x.arti)} className="btn btn-sm btn-outline" aria-label="Share ayat">
                                      <BsShare />
                                    </button>
                                  </div>
                              </div>
                          </section>
                          <div className="divider"></div>
                      </div>
                  )
              })}
            </div>

            <NextPreviousButton data={data} homeButton={true} />
          </div>
        </main>
      </>
    );
}
