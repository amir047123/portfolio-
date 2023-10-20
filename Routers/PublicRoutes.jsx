import About from "../src/components/About";
import CV from "../src/components/CV";
import Contact from "../src/components/Contact/Contact";
import Faq from "../src/components/Faq";
import Hero from "../src/components/Hero";
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





];
export default PublicRoutes;
