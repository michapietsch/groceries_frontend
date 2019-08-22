import React from "react";
import RecipesListItem from "./RecipesListItem";

const recipes = [
  {
    title: "Solyanka",
    groceries: [
      { title: "ham" },
      { title: "gherkins" },
      { title: "onions" },
      { title: "pepper" },
      { title: "sour cream" }
    ]
  },
  {
    title: "Pizza",
    groceries: [
      { title: "flour" },
      { title: "salt" },
      { title: "tomato paste" },
      { title: "oregano" },
      { title: "salami" },
      { title: "onions" },
      { title: "grated cheese" }
    ]
  }
];

const RecipesList = () => (
  <div>
    <ul>
      {recipes.map(recipe => (
        <li>
          <RecipesListItem recipe={recipe} />
        </li>
      ))}
    </ul>
  </div>
);

export default RecipesList;
