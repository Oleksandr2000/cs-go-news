import FullNews from "./pages/FullNews/FullNews";
import News from "./pages/News/News";
import { FULLNEWS_ROUTE, NEWS_ROUTE } from "./utils/routes.constants";

export interface RouteInterface {
  path: any;
  element: () => JSX.Element;
}

export const routes: RouteInterface[] = [
  {
    path: NEWS_ROUTE,
    element: News,
  },
  {
    path: `${FULLNEWS_ROUTE}/:newsNumber/:slug`,
    element: FullNews,
  },
];
