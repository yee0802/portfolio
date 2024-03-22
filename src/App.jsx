import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default App;
