/** @jsxImportSource @emotion/react */
import "twin.macro";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useSortBy, useTable } from "react-table";

type TableData = {
  // eslint-disable-next-line
  columns: any;
  // eslint-disable-next-line
  data: any;
};

export const TablePrimary: React.FC<TableData> = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()} tw="my-4 -mx-6" style={{ width: "calc(100% + 3rem)" }}>
      <thead>
        {headerGroups.map((headerGroup, idx) => (
          <tr key={idx} {...headerGroup.getHeaderGroupProps()} tw="bg-light border-t border-b">
            {headerGroup.headers.map((column, idx) => (
              <th
                key={idx}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                tw="px-4 py-3 font-roboto font-medium uppercase text-xs text-tail-second text-left"
              >
                <div tw="inline-flex items-center cursor-pointer">
                  {column.render("Header")}
                  <span tw="inline-flex flex-col ml-2">
                    <BiCaretUp style={{ color: column.isSorted && !column.isSortedDesc ? "red" : "" }} />
                    <BiCaretDown style={{ color: column.isSorted && column.isSortedDesc ? "red" : "" }} />
                  </span>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <tr key={idx} {...row.getRowProps()}>
              {row.cells.map((cell, idx) => {
                return (
                  <td
                    key={idx}
                    {...cell.getCellProps()}
                    tw="p-4 border-b border-light font-roboto font-normal text-sm text-tail-second"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
