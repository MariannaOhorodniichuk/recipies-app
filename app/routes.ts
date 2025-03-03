import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route('/', './routes/recipiesPage.tsx'),
    route('/meal/:id', './routes/mealPage.tsx'),
    route('/favourites', './routes/favouritesPage.tsx'),
  ] satisfies RouteConfig;
