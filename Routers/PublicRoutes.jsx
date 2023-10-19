import About from "../src/components/About";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer";
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


];
export default PublicRoutes;
