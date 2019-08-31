import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../store";
import Head from "next/head";
import Nav from "../components/nav";
import RecipesList from "../components/RecipesList";
import "../resources/css/tailwind.css";

class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    reduxStore.dispatch(fetchRecipes());

    return {};
  }

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>

        <Nav />

        <RecipesList />

        <style jsx>{``}</style>
      </div>
    );
  }
}
const mapDispatchToProps = { fetchRecipes };
export default connect(
  null,
  mapDispatchToProps
)(Index);
