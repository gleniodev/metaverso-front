"use client";

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";

interface ChartData {
  name: string;
  rendimento: number;
  fullDate: string;
}

export function AreaChartSection() {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://plataforma.metaverso.ltda/profits/datafeed",
        );
        const result = await response.json();

        // Mapear as propriedades "date" e "interest" para "name", "rendimento", e "fullDate"
        const mappedData = result.last30.map(
          (item: { date: string; interest: number }) => ({
            name: format(parseISO(item.date), "dd/MM"), // Formata como "dd/MM"
            rendimento: item.interest,
            fullDate: format(parseISO(item.date), "dd/MM/yy"), // Formata como "dd/MM/yy"
          }),
        );

        setData(mappedData);
      } catch (error) {
        console.error("Erro ao buscar dados do feed:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-0 lg:pt-24">
      <h3 className="text-metaverso-black mb-6 text-center text-xl font-bold">
        Rendimentos dos Últimos 30 dias
      </h3>
      <div className="w-f h-[200px] lg:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRendimento" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0072ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              labelFormatter={(value) =>
                data.find((item) => item.name === value)?.fullDate || value
              }
            />
            <Area
              type="monotone"
              dataKey="rendimento"
              stroke="#0072ff"
              fillOpacity={1}
              fill="url(#colorRendimento)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
