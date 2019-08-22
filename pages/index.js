import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import RecipesList from "../components/RecipesList";
import "../resources/css/tailwind.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <RecipesList />

    <style jsx>{``}</style>
  </div>
);

export default Home;
