import Head from "next/head";
import React from "react";
import AboutBox from "../components/AboutBox";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <div>
      <Head>
        <title>Marko Tomic - About</title>
      </Head>
      <Navbar />
      <AboutBox />
      <Footer />
    </div>
  );
};

export default about;
