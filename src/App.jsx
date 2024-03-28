import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ContactPage />
    </>
  );
}

export default App;
