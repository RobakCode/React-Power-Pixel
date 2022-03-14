/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useState } from "react";
import { BiDotsVerticalRounded, BiX } from "react-icons/bi";

export const DropdownCard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div tw="relative flex items-center">
      <button
        tw="flex items-center justify-center rounded-full w-8 h-8 hover:bg-gray-100"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {open ? <BiX /> : <BiDotsVerticalRounded />}
      </button>

      <div
        style={{
          display: open ? "block" : "none",
          opacity: open ? 1 : 0,
          boxShadow: "0px 0px 20px rgba(215, 222, 227, 0.4)",
        }}
        tw="absolute z-10 top-full right-0 w-44 list-none bg-white rounded-md border border-gray-100"
      >
        <ul tw="py-1">
          <li>
            <a
              href="#"
              tw="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              tw="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              tw="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              tw="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
