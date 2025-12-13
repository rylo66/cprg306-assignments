"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  const url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await url.json();

  if(data.meals){
    return data.meals
  } else {
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const result = await fetchMealIdeas(ingredient);
    setMeals(result);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4 w-500 ">
      <h2 className="text-2xl font-extrabold text-purple-700 mb-3">
        Meal Ideas: {ingredient.toUpperCase()}
      </h2>
      <div className="p-1 bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200 rounded-3xl 
      overflow-auto shadow-lg shadow-purple-500">
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="text-center text-purple-700"
            >
              {"•   " + meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-purple-700">No meal ideas found.</p>
      )}
      </div>
    </div>
  );
}
