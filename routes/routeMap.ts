import { ComponentType } from "react";
import { DetailView, HomeView } from "@/src/pages";

interface RouteType {
  name: string;
  component: ComponentType;
}

const routeMap: Array<RouteType> = [
  {
    name: "Detail",
    component: DetailView,
  },
  {
    name: "Home",
    component: HomeView,
  },
];

export default routeMap;
