"use client";

const rendimentos = [
  { id: 1, rend: "6,3%", mes: "JAN" },
  { id: 2, rend: "5.68%", mes: "FEV" },
  { id: 3, rend: "6,29%", mes: "MAR" },
  { id: 4, rend: "6,83%", mes: "ABR" },
  { id: 5, rend: "5,61%", mes: "MAI" },
  { id: 6, rend: "5,43%", mes: "JUN" },
  { id: 7, rend: "6,05%", mes: "JUL" },
  { id: 8, rend: "6,37%", mes: "AGO" },
  { id: 9, rend: "5,25%", mes: "SET" },
  { id: 9, rend: "4,92%", mes: "OUT" },
  { id: 9, rend: "3,13%", mes: "NOV" },
];

export function CardRendimentosHome() {
  return (
    <>
      <div className="bg-metaverso-black absolute -top-10 left-0 right-0 mx-auto flex h-[90px] w-[90%] items-center justify-start overflow-hidden rounded-2xl p-2 md:w-[70%] lg:relative lg:-top-28 lg:h-[120px] lg:w-[60%]">
        <div className="animate-marquee flex items-center justify-center whitespace-nowrap">
          {rendimentos.map((item) => (
            <div
              key={item.id}
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
