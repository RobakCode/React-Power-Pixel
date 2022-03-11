import { RouteConfig, RouteValue, createRouting } from "@finalapp/react-safe-router";
import { Page404 } from "Page404";
import { PageHome } from "PageHome";

type BasePaths = {
  HOME: RouteValue;
  "404": RouteValue;
};

const BASE: RouteConfig<BasePaths> = {
  HOME: {
    path: "/",
    Component: PageHome,
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

export const Router = getRoutingComponent(BASE)((getConfig) => [getConfig("HOME"), getConfig("404")]);
