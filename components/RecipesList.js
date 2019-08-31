import { useSelector, shallowEqual } from "react-redux";
import RecipesListItem from "./RecipesListItem";

const RecipesList = () => {
  const { recipes } = useSelector(
    state => ({
      recipes: state.recipes
    }),
    shallowEqual
  );
  return (
    <div>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <RecipesListItem recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;
