import { useEffect, useState } from "react";
import "./index.css";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(1);

  useEffect(() => {
    const projects = document.querySelectorAll(
      ".my-projects__gallery__list__item"
    );

    const carousel = () => {
      let stt = 0;
      projects[activeProject].style.transform = "none";
      projects[activeProject].style.zIndex = 1;
      projects[activeProject].style.filter = "none";
      projects[activeProject].style.opacity = 1;

      for (let i = activeProject + 1; i < projects.length; i++) {
        stt++;
        projects[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px)`;
        projects[i].style.zIndex = -stt;
        projects[i].style.filter = "blur(5px)";
        projects[i].style.opacity = stt > 2 ? 0 : 0.6;
      }

      stt = 0;
      for (let i = activeProject - 1; i >= 0; i--) {
        stt++;
        projects[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px)`;
        projects[i].style.zIndex = -stt;
        projects[i].style.filter = "blur(5px)";
        projects[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    };

    carousel();
  }, [activeProject]);

  return (
    <section id="projects" className="my-projects card">
      <h1>My Projects</h1>

      <section className="my-projects__gallery"></section>
    </section>
  );
}
