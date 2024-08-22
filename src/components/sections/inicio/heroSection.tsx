"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full h-screen md:h-[520px] lg:h-screen  flex overflow-hidden pt-32">
      <div className="flex flex-wrap container mx-auto gap-10 md:gap-0">
        <div className="items-center md:items-start w-full md:w-1/2 lg:w-[45%] flex flex-col gap-8">
          <h1 className="text-[32px] lg:text-[48px] font-bold text-metaverso-blue-4 ">
            <span className="text-metaverso-black">Transforme</span> seus
            investimentos com a Metaverso
          </h1>
          <p className="lg:text-[20px] text-metaverso-black font-medium">
            Rendimentos Reais, Transparência e Lucros Acima da Média.
          </p>
          <Button>Comece agora</Button>
        </div>
        <div className="w-full relative md:w-1/2 lg:w-[55%] h-screen lg:bottom-0">
          <Image
            src="/img-hero-home2.png"
            alt="Logo símbolo"
            width={829}
            height={879}
            className="absolute right-0 top-0"
          />
        </div>
      </div>
    </section>
  );
}
