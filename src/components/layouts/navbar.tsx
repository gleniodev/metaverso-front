"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "INÍCIO", path: "/inicio" },
    { name: "SOBRE", path: "/sobre" },
    { name: "RENDIMENTOS", path: "/rendimentos" },
    { name: "CONTATO", path: "/contato" },
  ];

  return (
    <header className="bg-metaverso-white fixed z-10 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
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
            width={200}
            height={64}
            className="mr-2 sm:block md:hidden lg:block"
          />
        </div>

        {/* Menu para desktop */}
        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span
                className={`${
                  pathname === link.path
                    ? "text-metaverso-blue-4 font-bold"
                    : "text-metaverso-black"
                } hover:text-metaverso-grey-2 cursor-pointer font-bold`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* entrar e cadastrar para desktop */}
        <div className="hidden space-x-6 font-bold md:flex">
          <Link href="/login" passHref>
            <span className="text-metaverso-black hover:text-metaverso-blue-3 cursor-pointer">
              Entrar
            </span>
          </Link>
          <Link href="/cadastro" passHref>
            <span className="bg-metaverso-blue-4 text-metaverso-white hover:bg-metaverso-blue-3 cursor-pointer rounded-md px-4 py-2">
              Cadastrar
            </span>
          </Link>
        </div>

        {/* Botão de menu para mobile */}
        <button
          className="text-metaverso-black md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
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
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Menu para mobile */}
      {isMobileMenuOpen && (
        <nav className="bg-metaverso-white absolute -z-10 flex h-screen w-full flex-col items-center gap-8 px-4 pb-2 pt-28 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span
                className={`block py-2 ${
                  pathname === link.path
                    ? "text-metaverso-blue-4 font-bold"
                    : "text-metaverso-black font-bold"
                } hover:text-metaverso-blue-3 cursor-pointer`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className="flex gap-8">
            <Link href="/login" passHref>
              <span
                className="text-metaverso-black hover:text-metaverso-blue-3 block cursor-pointer py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Entrar
              </span>
            </Link>
            <Link href="/cadastro" passHref>
              <span
                className="bg-metaverso-blue-4 text-metaverso-white hover:bg-metaverso-blue-3 block cursor-pointer rounded-md py-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cadastrar
              </span>
            </Link>
          </div>
        </nav>
      )}
      <div className="mx-auto h-[1px] w-[98%] bg-blue-200"></div>{" "}
      {/*separador*/}
    </header>
  );
};
