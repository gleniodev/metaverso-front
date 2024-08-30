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
import "swiper/swiper-bundle.css";

// Interface para os dados do gráfico
interface BarChartData {
  name: string;
  Metaverso: number;
  Poupanca: number;
  CDI: number;
}

export function BarChartSection() {
  const [data, setData] = useState<BarChartData[][]>([]);

  useEffect(() => {
    // Fetch datafeed
    const fetchData = async () => {
      try {
        const response = await fetch("URL-DATAFFED");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados do feed:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 lg:py-24">
      <h3 className="text-metaverso-black mb-6 text-center text-xl font-bold">
        Comparativo do rendimento da Metaverso com a Poupança e CDI
      </h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="py-4"
      >
        {data.map((monthData, index) => (
          <SwiperSlide key={index}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Metaverso" fill="#0072ff" />
                <Bar dataKey="Poupanca" fill="#00c6ff" />
                <Bar dataKey="CDI" fill="#00b4d8" />
              </BarChart>
            </ResponsiveContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
