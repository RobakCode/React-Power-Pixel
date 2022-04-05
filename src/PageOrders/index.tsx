/** @jsxImportSource @emotion/react */
import "twin.macro";
import { CardPrimary, TextH1, TextH2 } from "components";
import { LayoutDashboard } from "Layouts";

import { TableOrders } from "./Orders";

export const PageOrders: React.FC = () => {
  return (
    <LayoutDashboard>
      <div tw="flex w-full justify-between mb-12">
        <TextH1>Orders</TextH1>
      </div>
      <div>
        <CardPrimary>
          <TextH2 tw="flex w-full justify-between">Filters</TextH2>
        </CardPrimary>
      </div>
      <div tw="mt-8">
        <CardPrimary>
          <TextH2 tw="flex w-full justify-between">List orders</TextH2>
          <TableOrders />
        </CardPrimary>
      </div>
    </LayoutDashboard>
  );
};
