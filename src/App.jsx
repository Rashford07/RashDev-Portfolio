import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  const scroll = (sect) => {
    // sect.scrollIntoView(true);
  };
  return (
    <section className="body-content">
      <Header />
      <MainPage scroll={scroll} />
      <Footer />
    </section>
  );
}

export default App;
