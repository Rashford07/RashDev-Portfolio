import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  const scroll = (sect) => {};
  return (
    <section className="body-content">
      <Header />
      <MainPage />
      <Footer />
    </section>
  );
}

export default App;
