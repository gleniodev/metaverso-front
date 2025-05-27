"use client";

import { CardRendimentosHome } from "@/components/ui/cardRendimentosHome";
import { CandlestickChart, Laptop, Wheat, Home, BrickWall } from "lucide-react";

export function RendimentosSection() {
  const cards = [
    {
      icon: <CandlestickChart size={40} />,
      title: "Mercado Financeiro",
    },
    { icon: <Laptop size={40} />, title: "Tecnológico" },
    { icon: <Wheat size={40} />, title: "Agronegócio" },
    { icon: <Home size={40} />, title: "Imobiliário" },
    { icon: <BrickWall size={40} />, title: "Construção Civil" },
  ];

  return (
    <section className="bg-metaverso-grey-1 relative w-full py-20">
      <CardRendimentosHome />;
      <div className="container mt-8 flex flex-col items-center gap-20 text-center lg:mt-0">
        <h1 className="text-2xl font-bold lg:text-4xl">
          Diversificação Inteligente
        </h1>
        <p className="md:text-xl lg:text-2xl">
          Desenvolvemos estratégias de investimentos em aplicaç
          
          ões
          diversificadas como:
        </p>
        {/* CARDS */}
        <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:gap-8">
          {cards.map((card) => (
            <div className="bg-metaverso-white flex h-[180px] w-[47%] max-w-full flex-col flex-wrap items-center justify-center gap-2 rounded-xl p-2 shadow-md md:h-[280px] md:w-[35%] lg:h-[208px] lg:w-[190px] lg:p-4">
              <div className="">{card.icon}</div>
              <h3 className="text-metaverso-black text-center text-xl font-bold md:text-2xl lg:text-xl">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
