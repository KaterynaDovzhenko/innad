import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LessonsPage from "./pages/LessonsPage/LessonsPage";
import ContactMe from "./components/ContactMe/ContactMe";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav></Nav>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <LessonsPage></LessonsPage>
      <ContactMe></ContactMe>
      <ReviewsPage></ReviewsPage>
      <Footer></Footer>
    </>
  );
}

export default App;
