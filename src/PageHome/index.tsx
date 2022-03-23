/** @jsxImportSource @emotion/react */
import "twin.macro";
import { ButtonText, CardPrimary, DropdownCard, TextH1, TextH2, TextLead, TextPercent, TextTitle } from "components";
import { LayoutDashboard } from "Layouts";
import { PureComponent, useState } from "react";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import { CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Sector, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 200, pv: 180 },
  { name: "Page B", uv: 300, pv: 360 },
  { name: "Page C", uv: 150, pv: 280 },
  { name: "Page D", uv: 200, pv: 345 },
];

type CardType = {
  h2: string;
  title: string;
  lead: string;
  percent: string;
  percentVariant?: string;
};

const cards: CardType[] = [
  {
    h2: "Customers",
    title: "45,320",
    lead: "Since last month",
    percent: "5.25%",
  },
  {
    h2: "Orders",
    title: "45,320",
    lead: "Since last month",
    percent: "1.25%",
    percentVariant: "down",
  },
  {
    h2: "Earnings",
    title: "$7,524",
    lead: "Since last month",
    percent: "7.85%",
    percentVariant: "down",
  },
  {
    h2: "Growth",
    title: "+ 35.43%",
    lead: "Since last month",
    percent: "3.72%",
  },
];

const data2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

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
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export const PageHome: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <LayoutDashboard>
      <div tw="flex w-full justify-between mb-12">
        <TextH1>Dasboard</TextH1>
      </div>
      <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((item: CardType, idx: number) => (
            <CardPrimary key={idx}>
              <TextH2 tw="flex w-full justify-between">
                {item.h2}
                <DropdownCard />
              </TextH2>
              <TextTitle tw="mt-4 mb-6">{item.title}</TextTitle>
              {item?.percentVariant === "down" ? (
                <TextPercent variant="down">
                  <BiArrowFromTop />
                  5.25%
                </TextPercent>
              ) : (
                <TextPercent>
                  <BiArrowFromBottom />
                  5.25%
                </TextPercent>
              )}
              <TextLead tw="mt-2">{item.lead}</TextLead>
            </CardPrimary>
          ))}
        </div>
        <div tw="grid">
          <CardPrimary>
            <div tw="flex flex-col flex-1 justify-between">
              <TextH2 tw="mb-8">Revenue</TextH2>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={300} data={data}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={4} />
                  <Line type="monotone" dataKey="pv" stroke="#000" strokeWidth={0.5} />
                  <CartesianGrid stroke="#D8D8D8" strokeDasharray={5} />
                  <XAxis dataKey="name" stroke="#D8D8D8" />
                  <YAxis stroke="#D8D8D8" />
                  <YAxis />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardPrimary>
        </div>
      </div>
      <div tw="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        <div tw="lg:col-start-1 lg:col-end-4">
          <CardPrimary>
            <TextH2 tw="flex w-full justify-between">
              Top Selling Products
              <ButtonText>Export</ButtonText>
            </TextH2>
          </CardPrimary>
        </div>
        <div>
          <CardPrimary>
            <TextH2 tw="flex w-full justify-between">Total sales</TextH2>
            <div tw="block h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data2}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={(p, index) => setActiveIndex(index)}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardPrimary>
        </div>
      </div>
    </LayoutDashboard>
  );
};
