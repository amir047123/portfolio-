import About from "../src/components/About";
import CV from "../src/components/CV";
import Contact from "../src/components/Contact/Contact";
import Faq from "../src/components/Faq";
import Footer from "../src/components/Footer";
import Picture from "../src/components/Gallery/Picture";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Project from "../src/components/Project";

const PublicRoutes = [
  {
    path: "hero",
    Component: Hero,
  },
  { path: "contact", Component: Contact },
  { path: "project", Component: Project },
  { path: "about", Component: About },
  { path: "cv", Component: CV },
  { path: "faq", Component: Faq },
  { path: "picture", Component: Picture },





];
export default PublicRoutes;
