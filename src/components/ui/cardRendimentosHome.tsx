"use client";

const rendimentos = [
  { rend: "8%", mes: "JAN" },
  { rend: "5%", mes: "FEV" },
  { rend: "7%", mes: "MAR" },
  { rend: "2%", mes: "ABR" },
  { rend: "4%", mes: "MAI" },
  { rend: "9%", mes: "JUN" },
  { rend: "1%", mes: "JUL" },
];

export function CardRendimentosHome() {
  return (
    <>
      <div className="bg-metaverso-black absolute -top-10 left-0 right-0 mx-auto flex h-[90px] w-[90%] items-center justify-start overflow-hidden rounded-2xl p-2 md:w-[70%] lg:relative lg:-top-28 lg:h-[120px] lg:w-[60%]">
        <div className="animate-marquee flex whitespace-nowrap">
          {rendimentos.map((item) => (
            <div
              key={item.mes}
              className="mx-4 flex min-w-[50px] flex-col items-center lg:min-w-[100px] lg:text-2xl"
            >
              <span className="text-metaverso-blue-4 font-bold">
                {item.rend}
              </span>
              <span className="text-metaverso-white font-bold">{item.mes}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-metaverso-blue-4 absolute left-0 right-0 top-8 z-20 mx-auto flex h-10 w-[50%] items-center justify-center rounded-lg md:w-[280px] lg:top-16 lg:w-[320px] lg:text-xl">
        <span className="text-metaverso-white font-bold">RENDIMENTOS</span>
      </div>
    </>
  );
}
