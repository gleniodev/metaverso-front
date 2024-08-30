"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

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
    <header className="bg-metaverso-white fixed z-50 w-full">
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
        <div className="hidden items-center space-x-6 font-bold md:flex">
          <Link href="https://plataforma.metaverso.ltda/login" passHref>
            <span className="text-metaverso-black hover:text-metaverso-blue-3 cursor-pointer">
              Entrar
            </span>
          </Link>

          <Link
            href={"https://plataforma.metaverso.ltda/register"}
            target="_blank"
          >
            <Button size={"sm"}>Cadastrar</Button>
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
        <nav className="bg-metaverso-white absolute -z-10 flex h-screen w-full flex-col items-center justify-start gap-16 px-4 py-20 text-2xl md:hidden">
          <div className="flex flex-col items-center gap-8">
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
          </div>
          <div className="flex items-center justify-center gap-8">
            <Link href="https://plataforma.metaverso.ltda/login" passHref>
              <span
                className="text-metaverso-black hover:text-metaverso-blue-3 block cursor-pointer py-2 font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Entrar
              </span>
            </Link>
            <Link
              href={"https://plataforma.metaverso.ltda/register"}
              target="_blank"
            >
              <Button size={"lg"} onClick={() => setMobileMenuOpen(false)}>
                Cadastrar
              </Button>
            </Link>
          </div>
        </nav>
      )}
      <div className="mx-auto h-[1px] w-[98%] bg-blue-200"></div>{" "}
      {/*separador*/}
    </header>
  );
};
