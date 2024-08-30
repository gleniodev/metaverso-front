"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
export default function ProvaSocialSection() {
  return (
    <section className="bg-metaverso-grey-1 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Estatísticas */}
        <div className="flex flex-col items-center justify-center gap-8 text-center md:flex-row lg:gap-16">
          <div className="flex flex-col items-center">
            <span className="text-metaverso-blue-4 text-2xl font-bold lg:text-3xl">
              + 100 mil
            </span>
            <p className="text-metaverso-black text-sm lg:text-lg">
              clientes satisfeitos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-metaverso-blue-4 text-2xl font-bold lg:text-3xl">
              + 134 %
            </span>
            <p className="text-metaverso-black text-sm lg:text-lg">
              rendimento médio anual
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-metaverso-blue-4 text-2xl font-bold lg:text-3xl">
              + 128 %
            </span>
            <p className="text-metaverso-black text-sm lg:text-lg">
              rendimento acumulado
            </p>
          </div>
        </div>

        {/* Chamada para Ação */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <h2 className="text-metaverso-black text-center text-xl font-bold md:text-2xl lg:text-4xl">
            Há 18 anos, a escolha certa para seus investimentos.
          </h2>
          <TrendingUp size={40} />
          <Link
            href={"https://plataforma.metaverso.ltda/register"}
            target="_blank"
          >
            <Button>Invista agora</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
