/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Link } from "Router";

type PropsType = {
  title?: string;
  Icon?: React.FC;
} & React.ComponentProps<typeof Link>;

export const NavigationItem: React.FC<PropsType> = ({ Icon, title, ...route }) => (
  <li tw="text-tail-light font-roboto font-normal text-base">
    <Link {...route} tw="flex flex-row items-center py-2 my-2">
      {Icon && <Icon tw="mr-4" />}
      {title}
    </Link>
  </li>
);
