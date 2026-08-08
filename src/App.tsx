import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Pipeline from "./components/Pipeline";
import Capabilities from "./components/Capabilities";
import Differentiators from "./components/Differentiators";
import Results from "./components/Results";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-[100dvh]">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Pipeline />
        <Capabilities />
        <Differentiators />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
