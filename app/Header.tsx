'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Rockola', href: '/rockola' },
  // { name: 'Staff', href: '/staff' },
  // { name: 'Galería', href: '/galeria' },
  // { name: 'Donar', href: '/donar' },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState(navItems[0].href);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      `a[href="${activeTab}"]`
    ) as HTMLElement;
    if (activeElement) {
      setIndicatorWidth(activeElement.clientWidth);
      setIndicatorOffset(activeElement.offsetLeft);
    }
  }, [activeTab]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-primary text-primary-foreground shadow-md transition-all duration-200 ease-linear'>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <img
            src='https://res.cloudinary.com/dvh8hozns/image/upload/v1726928046/Monoambiente/yzwkxpfjxxqzbzhnvvki.png'
            alt='Logo de la banda'
            className='lg:h-20 lg:w-30 h-10'
          />
        </Link>
        <nav ref={navRef} className='hidden md:block relative'>
          <div className='flex space-x-4'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md lg:text-lg text-sm font-medium transition-colors duration-200 ease-in-out
                  ${
                    activeTab === item.href
                      ? 'text-white'
                      : 'text-primary-foreground/80 hover:text-white'
                  }`}
                onClick={() => setActiveTab(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <motion.div
            className='absolute bottom-0 h-1 bg-white rounded-full transition-all duration-300 ease-in-out'
            initial={false}
            animate={{
              width: indicatorWidth,
              x: indicatorOffset,
            }}
          />
        </nav>
        <button onClick={toggleMenu} className='md:hidden'>
          {isMenuOpen ? (
            <X className='h-6 w-6' />
          ) : (
            <Menu className='h-6 w-6' />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden'
        >
          <nav className='flex flex-col py-4'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-lg font-medium transition-colors duration-200 ease-in-out 
                  ${
                    activeTab === item.href
                      ? 'text-white'
                      : 'text-primary-foreground/80 hover:text-white'
                  }`}
                onClick={() => {
                  setActiveTab(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
