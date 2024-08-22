"use client";

const rendimentos = [
  { rend: '8%', mes: 'JAN' },
  { rend: '5%', mes: 'FEV' },
  { rend: '7%', mes: 'MAR' },
  { rend: '2%', mes: 'ABR' },
  { rend: '4%', mes: 'MAI' },
  { rend: '9%', mes: 'JUN' },
  { rend: '1%', mes: 'JUL' },
];

export function CardRendimentosHome() {
  return (
    <>
    <div className="flex w-[90%] lg:w-[900px] rounded-2xl -top-10  h-[90px] lg:h-[120px] bg-metaverso-black absolute lg:relative mx-auto left-0 right-0 items-center justify-start overflow-hidden p-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {rendimentos.map((item) => (
          <div key={item.mes} className="flex flex-col items-center min-w-[50px] lg:min-w-[100px] mx-4  lg:text-2xl">
            <span className="text-metaverso-blue-4 font-bold">
              {item.rend}
            </span>
            <span className="text-metaverso-white font-bold">
              {item.mes}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="-bottom-4 lg:-bottom-10 w-[50%] lg:w-[320px] h-10 rounded-lg bg-metaverso-blue-4 z-20 absolute mx-auto left-0 right-0 flex items-center justify-center lg:text-xl">
      <span className=" text-metaverso-white font-bold">RENDIMENTOS</span>
    </div>
    </>
  );
}


