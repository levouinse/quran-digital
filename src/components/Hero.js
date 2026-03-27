import Image from "next/image";
import { outfit } from '@/common/fonts';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { getLastRead } from '@/common/storage';

export default function Hero() {
    const [lastRead, setLastRead] = useState(null);

    useEffect(() => {
        setLastRead(getLastRead());
    }, []);

    return (
      <div className={outfit.className}>
        <div className="py-16 bg-observatory-700">
          <div className="text-center">
              <div className="flex flex-col">
                <div className="flex justify-center">
                    <Image 
                      src={'/img/logo.png'} 
                      width={180} 
                      height={180} 
                      alt="Quran Digital Logo - Al-Quran dengan Terjemahan Indonesia" 
                      priority
                      quality={90}
                    />
                </div>
                <div className="px-4 md:px-16 lg:px-96">
                  <div className="flex flex-wrap justify-center gap-2 mt-8">
                    {lastRead && (
                      <Link 
                        href={`/${lastRead.surah}?ayat=${lastRead.ayat}`} 
                        className="btn btn-sm md:btn-md rounded-2xl hover:shadow-xl !text-white btn-primary"
                        aria-label={`Lanjutkan membaca Surah ${lastRead.surah} Ayat ${lastRead.ayat}`}
                      >
                        Lanjutkan Surah {lastRead.surah}
                      </Link>
                    )}
                    <Link 
                      href={'/36'} 
                      className="btn btn-sm md:btn-md rounded-2xl hover:shadow-xl !text-white btn-accent btn-outline"
                      aria-label="Buka Surah Yasin"
                    >
                      Yāsīn
                    </Link>
                    <Link 
                      href={'/2?ayat=255'} 
                      className="btn btn-sm md:btn-md rounded-2xl hover:shadow-xl !text-white btn-accent btn-outline"
                      aria-label="Buka Ayat Kursi"
                    >
                      Ayat Kursi
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}