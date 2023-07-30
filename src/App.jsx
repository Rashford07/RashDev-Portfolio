import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  const [toggle, setToggle] = useState(false);
  const onToggleHandler = (tog) => {
    setToggle(tog);
  };
  return (
    <section className="body-content">
      <Header onToggle={onToggleHandler} />
      <MainPage toggle={toggle} />
      <Footer />
    </section>
  );
}

export default App;
