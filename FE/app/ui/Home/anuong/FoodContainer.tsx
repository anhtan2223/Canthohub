import FoodCard from "./FoodCard";
import { FoodType } from "@/app/lib/types/anuong";
export default async function FoodContainer({foods}: {foods: FoodType[]}) {

    return (
        <>
            {foods.map((food, index) => (
                <FoodCard key={index} food={food} />
            ))}

        </>
    )
}