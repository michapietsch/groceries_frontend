import React from "react";

const RecipeListItem = ({ recipe }) => (
  <div>
    <strong>{recipe.title}</strong>
    <br />
    {recipe.groceries.map(grocery => grocery.title).join(", ")}
  </div>
);

export default RecipeListItem;
