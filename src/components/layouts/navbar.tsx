'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INÍCIO', path: '/inicio' },
    { name: 'SOBRE', path: '/sobre' },
    { name: 'RENDIMENTOS', path: '/rendimentos' },
    { name: 'CONTATO', path: '/contato' },
  ];

  return (
    <header className="bg-metaverso-white h-[80px] fixed w-full z-10 ">
      <div className=" container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Image
            src="/mtv-ass-sm.svg"
            alt="Logo símbolo"
            width={64}
            height={64}
            className="mr-2"
          />
          <Image
            src="/mtv-ass-name.svg"
            alt="Logo nome"
            width={240}
            height={64}
            className="mr-2 sm:block md:hidden lg:block "
          />
        </div>

        {/* Menu para desktop */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span
                className={`${
                  pathname === link.path
                    ? 'text-metaverso-blue-4 font-bold'
                    : 'text-metaverso-black'
                } hover:text-metaverso-grey-2 font-bold cursor-pointer`}
              >
                {link.name}
              </span>
            </Link>
          ))}          
          </nav>

          {/* entrar e cadastrar para desktop */}
          <div className="hidden md:flex space-x-6 font-bold">
          <Link href="/login" passHref>
            <span className="text-metaverso-black hover:text-metaverso-blue-3 cursor-pointer">Entrar</span>
          </Link>
          <Link href="/cadastro" passHref>
            <span className="bg-metaverso-blue-4 text-metaverso-white px-4 py-2 rounded-md hover:bg-metaverso-blue-3 cursor-pointer">
              Cadastrar
            </span>
          </Link>
          </div>
        

        {/* Botão de menu para mobile */}
        <button
          className="md:hidden text-metaverso-black"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Menu para mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-metaverso-white px-4 pb-2 absolute w-full h-screen flex flex-col items-center gap-8 -z-10 pt-28">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span
                className={`block py-2 ${
                  pathname === link.path
                    ? 'text-metaverso-blue-4 font-bold'
                    : 'text-metaverso-black font-bold'
                } hover:text-metaverso-blue-3 cursor-pointer`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className='flex gap-8'>
          <Link href="/login" passHref>
            <span
              className="block py-2 text-metaverso-black hover:text-metaverso-blue-3 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entrar
            </span>
          </Link>
          <Link href="/cadastro" passHref>
            <span
              className="block py-2 bg-metaverso-blue-4 text-metaverso-white rounded-md text-center hover:bg-metaverso-blue-3 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cadastrar
            </span>
          </Link>
          </div>
        </nav>
      )}
      <div className="w-[98%] h-[1px] bg-blue-200 mx-auto"></div>
    </header>
  );
};
