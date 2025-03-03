import type { Route } from "./+types/home";
import { Favourites } from "~/components/favourites/favourites";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Favourite" },
    { name: "description", content: "Welcome to Favourite!" },
  ];
}

export default function FavouritesPage() {
  return <Favourites />;
}
