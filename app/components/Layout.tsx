import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';
import { SiTiktok } from 'react-icons/si';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li><Link href="https://www.instagram.com/mynameisleonz/" aria-label="Instagram"><FaInstagram size={24} /></Link></li>
            <li><Link href="https://www.facebook.com/leon.zheng.969" aria-label="Facebook"><FaFacebook size={24} /></Link></li>
            <li><Link href="https://www.xiaohongshu.com/user/profile/5ffe8d4c000000000100271d" aria-label="Xiaohongshu"><SiXiaohongshu size={24} /></Link></li>
            <li><Link href="/about" aria-label="Douyin"><SiTiktok size={24} /></Link></li>
          </ul>
          <Link href="/" className="text-2xl font-bold">
            LeonGor Studio Blog
          </Link>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto flex-grow p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} LeonGor Studio Blog. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
