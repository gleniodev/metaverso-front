"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SobreSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="from-metaverso-blue-5 to-metaverso-blue-4 relative h-auto w-full bg-gradient-to-r py-20">
        <div className="container flex flex-wrap gap-8 lg:flex-row">
          <div className="flex flex-col gap-8 font-bold lg:w-1/2">
            <h3 className="text-metaverso-blue-2">Sobre Nós</h3>
            <h2 className="text-metaverso-white text-2xl lg:text-4xl lg:leading-snug">
              Nosso objetivo é oferecer retornos reais do mercado financeiro
              internacional com segurança e transparência.
            </h2>
          </div>
          <div
            className="relative w-full cursor-pointer lg:w-[45%]"
            onClick={() => setIsVideoOpen(true)}
          >
            <video
              className="mask-video absolute left-0 top-0 z-10 w-full"
              autoPlay
              loop
              muted
            >
              <source src="/metaverso.mp4" type="video/mp4" />
            </video>
            <Image
              src="/video-bg.png"
              alt="Imagem de Fundo"
              className="z-0 w-full"
              width={600}
              height={400}
            />
          </div>
          <div className="block">
            <Link href={"/sobre"}>
              <Button>Saiba Mais</Button>
            </Link>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative h-auto w-full max-w-5xl">
            <video className="h-full w-full object-cover" controls autoPlay>
              <source src="/metaverso.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
