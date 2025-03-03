import { Recipies } from "~/components/recipies/recipies";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Meals app" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function RecipiesPage() {
  return <Recipies />;
}
