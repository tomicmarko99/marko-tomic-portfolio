import FastLoading from "../components/FastLoading";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import SeoFriendly from "../components/SeoFriendly";
import Head from "next/head";

export default function Home() {
  return (
    <div className="HOME">
      <Head>
        <title>Marko Tomic - Frontend Developer</title>
        <meta
          name="description"
          content="I'm Marko Tomic, IT Engineer and Frontend Developer."
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Marko Tomic - Frontend Developer"
        />
        <meta
          name="og:description"
          property="og:description"
          content="I'm Marko Tomic, IT Engineer and Frontend Developer."
        />
        <meta
          property="og:site_name"
          content="Marko Tomic - Frontend Developer"
        />
        <meta
          name="twitter:card"
          content="I'm Marko Tomic, IT Engineer and Frontend Developer."
        />
        <meta name="twitter:title" content="Marko Tomic - Frontend Developer" />
        <meta
          name="twitter:description"
          content="I'm Marko Tomic, IT Engineer and Frontend Developer."
        />
        <meta name="twitter:creator" content="Marko Tomic" />
      </Head>
      <Navbar />
      <Hero />
      <Partners />
      <FastLoading />
      <SeoFriendly />
      <Features />
      <Footer />
    </div>
  );
}
