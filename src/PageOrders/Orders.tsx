import { TablePrimary } from "components";
import React, { useMemo } from "react";

import { topSellingData } from "./sampleDataTable";

type SellingRow = {
  productName: string;
  date: string;
  price: string;
  qty: string;
  amount: string;
};

export const TableOrders: React.FC = () => {
  const data = useMemo<SellingRow[]>(() => topSellingData, []);

  const columns = useMemo(
    () => [
      {
        Header: "PRODUCT NAME",
        accessor: "productName",
      },
      {
        Header: "DATE TIME",
        accessor: "date",
      },
      {
        Header: "PRICE",
        accessor: "price",
        Cell: ({ value }) => `$${value}`,
      },
      {
        Header: "QUANTITY",
        accessor: "qty",
      },
      {
        Header: "AMOUNT",
        accessor: "amount",
        Cell: ({ value }) => `$${value}`,
      },
    ],
    [],
  );

  return <TablePrimary columns={columns} data={data} />;
};
