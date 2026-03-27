import { philosopher } from '@/common/fonts';
import { BsGithub, BsBookmark, BsClockHistory } from 'react-icons/bs';
import Link from 'next/link';

export default function Navbar() {
    return (
      <>
        <nav className="navbar bg-observatory-700 text-white" role="navigation" aria-label="Main navigation">
          <div className="flex-1">
            <Link href={'/'} className={`${philosopher.className} ml-5 normal-case text-xl font-bold`} aria-label="Kembali ke beranda">
                Al-Quran Digital
            </Link>
          </div>
          <div className="flex-none gap-2">
            <Link href="/last-read" className='hover:text-accent transition' aria-label="Terakhir dibaca">
              <BsClockHistory className='w-5 h-5' />
            </Link>
            <Link href="/bookmarks" className='hover:text-accent transition' aria-label="Bookmark">
              <BsBookmark className='w-5 h-5' />
            </Link>
            <Link href="https://github.com/levouinse/quran-digital" target='_blank' rel="noopener noreferrer" className='mr-5 hover:text-accent transition' aria-label="GitHub repository">
              <BsGithub className='w-5 h-5' />
            </Link>
          </div>
        </nav>
      </>
    );
}