/** @jsxImportSource @emotion/react */
import "twin.macro";
import { ButtonText, CardPrimary, DropdownCard, TextH1, TextH2, TextLead, TextPercent, TextTitle } from "components";
import { LayoutDashboard } from "Layouts";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";

import { ChartLine } from "./ChartLine";
import { ChartPie } from "./ChartPie";
import { TableTopSelling } from "./TopSelling";

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

export const PageHome: React.FC = () => (
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
            <ChartLine />
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
          <div>
            <TableTopSelling />
          </div>
        </CardPrimary>
      </div>
      <div>
        <CardPrimary>
          <TextH2 tw="flex w-full justify-between">Total sales</TextH2>
          <div tw="block h-64">
            <ChartPie />
          </div>
        </CardPrimary>
      </div>
    </div>
  </LayoutDashboard>
);
