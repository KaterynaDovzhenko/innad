import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LessonsPage from "./pages/LessonsPage/LessonsPage";
import PricingPage from "./pages/PricingPage/PricingPage";
import ContactMe from "./components/ContactMe/ContactMe";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "classes",
      "pricing",
      "reviews",
      "contact",
    ];

    function onScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          if (activeSection !== sectionId) {
            setActiveSection(sectionId);
          }
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);
  return (
    <>
      <Nav activeSection={activeSection}></Nav>
      <div className="content">
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <LessonsPage></LessonsPage>
        <PricingPage></PricingPage>
        <ContactMe></ContactMe>
        <ReviewsPage></ReviewsPage>
        <ContactPage></ContactPage>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
