import Image from "next/image";
import { GemIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChartSection } from "@/components/sections/rendimentos/areaChartSection";
import { BarChartSection } from "@/components/sections/rendimentos/barChartSection";

export default function Rendimentos() {
  return (
    <section>
      {/* Seção do Hero */}
      <div className="relative h-64 w-full bg-[url('/bg-rendimentos.png')] bg-cover bg-no-repeat md:h-[275px] lg:h-[340px] lg:bg-left-top">
        <div className="container absolute inset-0 top-16 flex items-center justify-center font-bold md:justify-start">
          <h1 className="text-metaverso-black flex flex-col text-4xl md:ml-[10%] md:text-5xl lg:text-6xl">
            <span>Nossos</span>
            <span className="text-metaverso-blue-4 ml-14">Rendimentos</span>
          </h1>
        </div>
      </div>

      {/* Seção de Conteúdo */}
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="text-metaverso-black mb-12 flex flex-col gap-8 text-center">
          <div className="b-20 container flex flex-col items-center justify-center gap-20 pb-20 text-center">
            <p className="text-metaverso-black text-xl font-bold lg:text-2xl">
              Descubra como nossos rendimentos superam o mercado e veja seus
              investimentos crescerem mais rápido com a Metaverso.
            </p>
          </div>
        </div>
      </div>
      <AreaChartSection />
      <BarChartSection />
    </section>
  );
}
