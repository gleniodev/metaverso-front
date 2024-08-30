"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex h-screen w-full overflow-hidden pt-32 md:h-[520px] lg:h-[680px]">
      <div className="container mx-auto flex flex-wrap gap-10 md:gap-0">
        <div className="flex w-full flex-col items-center gap-8 md:w-1/2 md:items-start lg:w-[45%]">
          <h1 className="text-metaverso-blue-4 text-[32px] font-bold lg:text-[48px]">
            <span className="text-metaverso-black">Transforme</span> seus
            investimentos com a Metaverso
          </h1>
          <p className="text-metaverso-black font-medium lg:text-[20px]">
            Rendimentos Reais, Transparência e Lucros Acima da Média.
          </p>
          <Link
            href={"https://plataforma.metaverso.ltda/register"}
            target="_blank"
          >
            <Button>Invista agora</Button>
          </Link>
        </div>
        <div className="relative h-screen w-full md:w-1/2 lg:bottom-0 lg:w-[55%]">
          <Image
            src="/img-hero-home2.png"
            alt="Homem com celular"
            width={829}
            height={879}
            className="absolute right-0 top-0 md:top-8 lg:bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
