import Image from "next/image";
import { GemIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sobre() {
  const diferenciais = [
    {
      titulo: "Transparência Total",
      texto:
        "Você sempre saberá onde seu dinheiro está e como ele está sendo investido.",
    },
    {
      titulo: "Rendimentos Reais",
      texto:
        "Garantimos lucros acima da média oferecida pelos bancos tradicionais.",
    },
    {
      titulo: "Benefícios Igualitários",
      texto:
        "Todos os nossos clientes  têm acesso aos mesmos benefícios e oportunidades.",
    },
    {
      titulo: "Experiência e Conhecimento",
      texto:
        "Com 18 anos de atuação no mercado financeiro, estamos sempre atualizados com as últimas tendências e inovações.",
    },
  ];
  return (
    <section>
      {/* Seção do Hero */}
      <div className="relative h-64 w-full bg-[url('/bg-hero-sobre.png')] bg-cover bg-right-top bg-no-repeat md:h-[275px] lg:h-[340px] lg:bg-left-top">
        <div className="container absolute inset-0 top-16 flex items-center justify-center font-bold md:justify-end">
          <h1 className="text-metaverso-black flex flex-col text-4xl md:mr-[10%] md:text-5xl lg:text-6xl">
            <span>Quem</span>
            <span className="text-metaverso-blue-4 ml-14">Somos?</span>
          </h1>
        </div>
      </div>

      {/* Seção de Conteúdo */}
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="text-metaverso-black mb-12 flex flex-col gap-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <GemIcon className="text-metaverso-blue-4" />
            <h2 className="text-2xl font-bold lg:text-3xl">Nossa História</h2>
          </div>
          <p className="lg:text-xl lg:leading-normal">
            A Metaverso Investimentos foi fundada com um objetivo claro:
            transformar a maneira como as pessoas veem e administram seus
            investimentos. Desde o início, nossa missão tem sido oferecer
            rendimentos verdadeiros e substanciais para investidores de todos os
            portes - pequenos, médios e grandes. Com 18 anos de experiência
            comprovada no mercado financeiro, temos orgulho de ser uma
            referência em transparência e eficiência.
          </p>
          <div className="bg-metaverso-grey-2 mx-auto h-[1px] w-[98%]"></div>{" "}
        </div>

        <div className="mb-12 flex flex-col gap-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <GemIcon className="text-metaverso-blue-4" />
            <h2 className="text-2xl font-bold lg:text-3xl">Nossa Missão</h2>
          </div>
          <p className="lg:text-xl lg:leading-normal">
            Nossa missão é mudar sua visão sobre investimentos. Queremos que
            você veja seus recursos crescerem de forma significativa, com
            segurança e confiança. Não acreditamos em promessas vazias ou em
            esconder taxas absurdas. Nosso compromisso é com a clareza e a
            honestidade, proporcionando rendimentos reais no mercado financeiro
            internacional.
          </p>
        </div>

        <div className="bg-metaverso-black relative rounded-3xl">
          <div className="py-12 text-center md:px-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-4">
                <GemIcon className="text-metaverso-white" />
                <h2 className="text-metaverso-white text-2xl font-bold lg:text-3xl">
                  Nosso Diferencial
                </h2>
              </div>
              <div className="bg-metaverso-grey-2 mx-auto h-[1px] w-[70%] md:w-[85%]"></div>{" "}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
              {diferenciais.map((dif) => (
                <div className="bg-metaverso-black rounded-xl p-8 text-white">
                  <h3 className="mb-4 text-2xl font-bold">{dif.titulo}</h3>
                  <p>{dif.texto} </p>
                </div>
              ))}
            </div>
            <Image
              src="/bg-diferencial.png"
              alt="Logo símbolo"
              width={518}
              height={454}
              className="absolute -bottom-14 right-0 opacity-80 lg:top-10"
            />
          </div>
        </div>
      </div>
      <div className="b-20 container flex flex-col items-center justify-center gap-20 pb-20 text-center">
        <p className="text-metaverso-black text-xl font-bold lg:text-2xl">
          Escolher a Metaverso é garantir o crescimento seguro e transparente do
          seu capital, com suporte personalizado e estratégias eficientes em
          cada passo do caminho.
        </p>
        <Link
          href={"https://plataforma.metaverso.ltda/register"}
          target="_blank"
        >
          <Button>Invista agora</Button>
        </Link>
      </div>
    </section>
  );
}
