import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const exampleInitialState = {
  recipes: []
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return Object.assign({}, state, {
        recipes: recipesFixture()
      });
    default:
      return state;
  }
};

export const fetchRecipes = () => {
  return { type: "FETCH_RECIPES" };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}

function recipesFixture() {
  return [
    {
      id: 1,
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
      id: 2,
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
}
