import React from "react";
import RecipeForm from "./RecipeForm";

class RecipeListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditModeOn: false };

    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState(state => ({
      isEditModeOn: !state.isEditModeOn
    }));
  }

  render() {
    const recipe = this.props.recipe;

    if (this.state.isEditModeOn === false)
      return (
        <div>
          <strong>{recipe.title}</strong>
          <br />
          {recipe.groceries.map(grocery => grocery.title).join(", ")}
          <br />
          <button onClick={this.toggleEditMode}>Edit</button>
        </div>
      );

    return <RecipeForm recipe={recipe} />;
  }
}

export default RecipeListItem;
