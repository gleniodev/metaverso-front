"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const navLinks = [
    { id: 1, name: "INÍCIO", path: "/inicio" },
    { id: 2, name: "SOBRE", path: "/sobre" },
    { id: 3, name: "RENDIMENTOS", path: "/rendimentos" },
    { id: 4, name: "CONTATO", path: "/contato" },
  ];

  const icons = [
    {
      name: "icon youtube",
      src: "/icon-youtube.svg",
      url: "https://www.youtube.com/@JonathanBispo10",
    },
    {
      name: "icon instagram",
      src: "/icon-insta.svg",
      url: "https://www.instagram.com/jonathan.bispo.10/",
    },
    {
      name: "icon tiktok",
      src: "/icon-tiktok.svg",
      url: "https://www.tiktok.com/@livedaytrade1",
    },
  ];

  return (
    <footer className="bg-metaverso-black text-metaverso-white w-full">
      <div className="container flex flex-col items-center justify-center gap-20 py-20 md:justify-around lg:flex-row">
        <div>
          <Image
            src="/mtv-ass-mono.svg"
            alt="Logo metaverso"
            width={187}
            height={87}
          />
        </div>
        <div className="justc flex flex-col items-center justify-center gap-8">
          <nav className="flex flex-col items-center justify-center gap-8 md:flex-row">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.path} passHref>
                <span
                  className={
                    "hover:text-metaverso-grey-2 cursor-pointer font-medium"
                  }
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          <div className="bg-metaverso-grey-2 hidden h-[1px] w-[120%] md:block"></div>{" "}
          {/*separador*/}
          <div className="flex gap-10">
            {icons.map((icon) => (
              <Link href={icon.url} target="_blank">
                <Image src={icon.src} alt={icon.name} width={32} height={32} />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-baseline gap-8">
        </div>
      </div>
      <div className="pb-8">
        <p className="text-center font-extralight">
          © Copyrigth 2024 todos os direitos reservados Metaverso Assessoria em
          Investimentos
        </p>
      </div>
    </footer>
  );
}
