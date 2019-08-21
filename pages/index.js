import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import "../resources/css/tailwind.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <style jsx>{``}</style>
  </div>
);

export default Home;
