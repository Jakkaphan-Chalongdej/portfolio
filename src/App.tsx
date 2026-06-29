import { lazy, Suspense } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// three.js is heavy — load it after the first paint so the page stays snappy.
const Background3D = lazy(() => import("./components/Background3D"));

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Marquee />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
