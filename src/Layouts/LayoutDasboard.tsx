/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Navigation, NavigationItem, TextH3 } from "components";
import {
  BiBarChartSquare,
  BiBookHeart,
  BiCalendar,
  BiCategory,
  BiCheckboxChecked,
  BiClipboard,
  BiCog,
  BiCollection,
  BiMoney,
  BiNotification,
  BiSearch,
  BiShoppingBag,
  BiUserCheck,
  BiUserPin,
} from "react-icons/bi";

export const LayoutDashboard: React.FC = ({ children }) => {
  return (
    <div tw="flex flex-row">
      <div tw="bg-main px-8 py-11 min-h-screen">
        <div>
          <img src="/logo.svg" alt="logo site" />
          <TextH3 tw="mt-16 mb-2">main</TextH3>
          <Navigation>
            <NavigationItem route={"HOME"} Icon={BiClipboard} title="Dashboard" />
            <NavigationItem route={"HOME"} Icon={BiCalendar} title="Orders" />
            <NavigationItem route={"HOME"} Icon={BiBarChartSquare} title="Analitisc" />
            <NavigationItem route={"HOME"} Icon={BiCategory} title="Categories" />
            <NavigationItem route={"HOME"} Icon={BiCollection} title="Collections" />
            <NavigationItem route={"HOME"} Icon={BiCheckboxChecked} title="Products" />
            <NavigationItem route={"HOME"} Icon={BiMoney} title="Discounts" />
            <NavigationItem route={"HOME"} Icon={BiUserPin} title="Employees" />
            <NavigationItem route={"HOME"} Icon={BiUserCheck} title="Customers" />
          </Navigation>
          <TextH3 tw="mt-8 mb-2">Sales channels</TextH3>
          <Navigation>
            <NavigationItem route={"HOME"} Icon={BiShoppingBag} title="Online Store" />
            <NavigationItem route={"HOME"} Icon={BiBookHeart} title="Marketing" />
          </Navigation>
        </div>
      </div>
      <div tw="bg-light w-full p-8">
        <div tw="flex justify-end text-icon">
          <div tw="text-lg inline-grid grid-cols-4 gap-4">
            <a href="#" tw="inline-flex items-center">
              <BiSearch tw="cursor-pointer" />
            </a>
            <a href="#" tw="inline-flex items-center">
              <BiNotification tw="cursor-pointer" />
            </a>
            <a href="#" tw="inline-flex items-center">
              <BiCog tw="cursor-pointer" />
            </a>
            <a href="#" tw="inline-flex items-center w-12 h-12">
              <img src="/avatar.svg" alt="avatar" />
            </a>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
