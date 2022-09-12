import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useGlobalContext } from "./context";

const App = () => {
  // STATE VALUES
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div>
        <Loading />
        <Navbar />
        <Hero />
        <Body />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
