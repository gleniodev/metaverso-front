"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const navLinks = [
    { name: "INÍCIO", path: "/inicio" },
    { name: "SOBRE", path: "/sobre" },
    { name: "RENDIMENTOS", path: "/rendimentos" },
    { name: "CONTATO", path: "/contato" },
  ];

  const icons = [
    {
      name: "icon facebook",
      src: "/icon-face.svg",
      url: "https://www.facebook.com",
    },
    {
      name: "icon instagram",
      src: "/icon-insta.svg",
      url: "https://www.instagram.com",
    },
    { name: "icon x", src: "/icon-x.svg", url: "https://www.x.com" },
    {
      name: "icon youtube",
      src: "/icon-youtube.svg",
      url: "https://www.youtube.com",
    },
  ];

  return (
    <footer className="bg-metaverso-black text-metaverso-white mt-8 w-full">
      <div className="container flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:justify-around">
        <div>
          <Image
            src="/mtv-ass-mono.svg"
            alt="Logo metaverso"
            width={163}
            height={75}
            className="mr-2"
          />
        </div>
        <div className="justc flex flex-col items-center justify-center gap-8">
          <nav className="flex flex-col items-center justify-center gap-8 md:flex-row">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} passHref>
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
          <div className="hidden h-[1px] w-[120%] bg-blue-200 md:block"></div>{" "}
          {/*separador*/}
          <div className="flex gap-8">
            {icons.map((icon) => (
              <Link href={icon.url} target="_blank">
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={32}
                  height={32}
                  className="mr-2"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-baseline gap-8 md:flex-col">
          <Image
            src="/cvm-logo-mono.svg"
            alt="Logo símbolo"
            width={90}
            height={48}
            className="mr-2"
          />
          <Image
            src="/anbima-logo-mono.svg"
            alt="Logo símbolo"
            width={90}
            height={48}
            className="mr-2"
          />
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
