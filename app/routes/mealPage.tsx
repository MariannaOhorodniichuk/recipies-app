import type { Route } from "../+types/root";
import { Meal } from "~/components/recipies/meal/meal";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Meal" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function MealPage() {
  return <Meal />;
}
