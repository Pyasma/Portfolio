import Hero from "../components/Hero";
import About from "../components/About";
import CodeActivity from "../components/CodeActivity";
import Experience from "../components/Experience";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <CodeActivity />
      <Experience />
      <OpenSource />
      <Projects />
      <Blogs />
      <Footer />
    </main>
  );
}
