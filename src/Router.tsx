import { RouteConfig, RouteValue, createRouting } from "@finalapp/react-safe-router";
import { Page404 } from "Page404";
import { PageHome } from "PageHome";
import { PageOrders } from "PageOrders";

type BasePaths = {
  HOME: RouteValue;
  ORDERS: RouteValue;
  "404": RouteValue;
};

const BASE: RouteConfig<BasePaths> = {
  HOME: {
    path: "/",
    Component: PageHome,
  },
  ORDERS: {
    path: "/orders",
    Component: PageOrders,
  },
  "404": {
    path: "/404",
    Component: Page404,
  },
};

export type Paths = BasePaths;

export const {
  navigateTo,
  Navigate,
  getMatchRoutes,
  Link,
  NavLink,
  getPath,
  getPathGlobal,
  getRoutingComponent,
  isRoute,
  useIsRoute,
  useNavigateTo,
} = createRouting<Paths>();

export const Router = getRoutingComponent(BASE)((getConfig) => [
  getConfig("HOME"),
  getConfig("ORDERS"),
  getConfig("404"),
]);
