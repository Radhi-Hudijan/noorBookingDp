import React from "react";
import "./normalChart.scss";

//import the chart from recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    total: 1200,
  },
  {
    name: "Feb",
    total: 2100,
  },
  {
    name: "Mar",
    total: 800,
  },
  {
    name: "Apr",
    total: 1600,
  },
  {
    name: "May",
    total: 900,
  },
  {
    name: "Jun",
    total: 1700,
  },
];

const NormalChart = () => {
  return (
    <div className="chart">
      <div className="title"> Last 6 month (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="total"
            stroke="##8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />

          <Area
            type="monotone"
            dataKey="pv"
            stroke="##82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NormalChart;
