/** @jsxImportSource @emotion/react */
import "twin.macro";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Page A", uv: 200, pv: 180 },
  { name: "Page B", uv: 300, pv: 360 },
  { name: "Page C", uv: 150, pv: 280 },
  { name: "Page D", uv: 200, pv: 345 },
];

export const ChartLine: React.FC = () => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart width={300} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#F52D56" strokeWidth={4} />
      <Line type="monotone" dataKey="pv" stroke="#03DE73" strokeWidth={0.5} />
      <CartesianGrid stroke="#D8D8D8" strokeDasharray={5} />
      <XAxis dataKey="name" stroke="#D8D8D8" />
      <YAxis stroke="#D8D8D8" />
      <YAxis />
    </LineChart>
  </ResponsiveContainer>
);
