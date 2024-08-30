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

interface ChartData {
  name: string;
  uv: number;
}

export function AreaChartSection() {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Fetch datafeed
    const fetchData = async () => {
      try {
        const response = await fetch("URL-DTAFEED");
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
        Rendimentos dos Últimos 30 dias
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0072ff" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0072ff"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}
