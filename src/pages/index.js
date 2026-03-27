import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AllSurah from "@/components/AllSurah";
import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Quran Digital",
    "url": "https://quran.andifarel.biz.id",
    "description": "Baca Al-Quran digital dengan terjemahan Bahasa Indonesia. Fitur bookmark, last read, dan offline mode. Akses 114 surah lengkap dengan mudah.",
    "inLanguage": "id-ID",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://quran.andifarel.biz.id/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="description" content="Baca Al-Quran digital dengan terjemahan Bahasa Indonesia. Fitur bookmark, last read, dan offline mode. Akses 114 surah lengkap dengan mudah." />
        <meta name="keywords" content="quran, al-quran, quran digital, quran indonesia, terjemahan quran, baca quran online, quran offline, al quran indonesia, quran terjemahan, mushaf digital" />
        <meta name="author" content="Quran Digital" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Quran Digital - Al-Quran dengan Terjemahan Indonesia" />
        <meta property="og:description" content="Baca Al-Quran digital dengan terjemahan Bahasa Indonesia. Fitur bookmark, last read, dan offline mode." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quran.andifarel.biz.id" />
        <meta property="og:image" content="https://quran.andifarel.biz.id/icon-512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Quran Digital Logo" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Quran Digital" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quran Digital - Al-Quran dengan Terjemahan Indonesia" />
        <meta name="twitter:description" content="Baca Al-Quran digital dengan terjemahan Bahasa Indonesia" />
        <meta name="twitter:image" content="https://quran.andifarel.biz.id/icon-512.png" />
        <meta name="twitter:image:alt" content="Quran Digital Logo" />
        
        <link rel="canonical" href="https://quran.andifarel.biz.id" />
        <title>Quran Digital - Al-Quran dengan Terjemahan Indonesia</title>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="bg-base-200 min-h-screen">
        <Navbar />
        <Hero />
        <AllSurah />
      </main>
    </>
  )
}
