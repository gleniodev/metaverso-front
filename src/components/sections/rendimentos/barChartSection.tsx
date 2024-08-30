"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Interface para os dados do gráfico
interface BarChartData {
  name: string;
  Metaverso: number;
  Poupanca: number;
  CDI: number;
}

export function BarChartSection() {
  const [data, setData] = useState<BarChartData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://plataforma.metaverso.ltda/profits/datafeed",
        );
        const result = await response.json();

        const cdiValues = [0.97, 0.8, 0.83, 0.89, 0.83, 0.79, 0.91, 1.14]; // CDI janeiro a agosto 2024
        const poupancaValues = [0.58, 0.5, 0.53, 0.6, 0.58, 0.53, 0.57, 0.57]; // Poupança janeiro a agosto 2024

        const monthNames = [
          "JAN",
          "FEV",
          "MAR",
          "ABR",
          "MAI",
          "JUN",
          "JUL",
          "AGO",
          "SET",
          "OUT",
          "NOV",
          "DEZ",
        ];

        const mappedData = result.monthly.map(
          (item: { date: string; interest: number }, index: number) => {
            const [month, year] = item.date.split("-");

            return {
              name: `${monthNames[parseInt(month) - 1]}-${year.slice(-2)}`, // Formatar data como "MMM-YY"
              Metaverso: item.interest,
              Poupanca: poupancaValues[index] || 0, // Usar valores da poupança
              CDI: cdiValues[index] || 0, // Usar valores do CDI
            };
          },
        );

        setData(mappedData);
      } catch (error) {
        console.error("Erro ao buscar dados do feed:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 lg:py-24">
      <h3 className="text-metaverso-black mb-12 text-center text-xl font-bold">
        Comparativo do rendimento da Metaverso com a Poupança e CDI
      </h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={1} // Padrão: 1 slide por view
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide em telas sm (640px ou mais)
          },
          768: {
            slidesPerView: 2, // 3 slides em telas md (768px ou mais)
          },
          1024: {
            slidesPerView: 3, // 3 slides em telas md (768px ou mais)
          },
        }}
        navigation
        pagination={false}
        modules={[Navigation, Pagination]}
        className="py-4"
      >
        {data.map((monthData, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="flex h-64 w-[90%] flex-col px-2 md:h-80 md:w-[80%] lg:h-96">
              {" "}
              {/* Adiciona padding para evitar overflow */}
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[monthData]}>
                  <XAxis dataKey="name" className="font-bold" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Metaverso" fill="#003A6F" />
                  <Bar dataKey="Poupanca" fill="#0B87EB" />
                  <Bar dataKey="CDI" fill="#35D0F2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
