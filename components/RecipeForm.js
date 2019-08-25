import React from "react";

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recipe: props.recipe };

    this.handleChangeInTitle = this.handleChangeInTitle.bind(this);
  }

  handleChangeInTitle(event) {
    this.setState({ recipe: { title: event.target.value } });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.recipe.title}
          onChange={this.handleChangeInTitle}
        />
      </div>
    );
  }
}

export default RecipeForm;
