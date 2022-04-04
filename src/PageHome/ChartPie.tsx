/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"#03DE73"}
      />
    </g>
  );
};

export const ChartPie: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#F52D56"
          dataKey="value"
          onMouseEnter={(e, index) => setActiveIndex(index)}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
