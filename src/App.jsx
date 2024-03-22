import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
    </>
  );
}

export default App;
