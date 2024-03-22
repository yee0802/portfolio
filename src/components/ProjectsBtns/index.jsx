import "./index.css";

export default function ProjectsBtns({ activeProject, setActiveProject }) {
  const handleNext = () => {
    const projects = document.querySelectorAll(
      ".my-projects__gallery__list__item"
    );
    setActiveProject(
      activeProject + 1 < projects.length ? activeProject + 1 : activeProject
    );
  };

  const handlePrev = () => {
    setActiveProject(
      activeProject - 1 >= 0 ? activeProject - 1 : activeProject
    );
  };

  return (
    <>
      <button className="my_projects__gallery__next" onClick={handleNext}>
        {">"}
      </button>

      <button className="my_projects__gallery__prev" onClick={handlePrev}>
        {"<"}
      </button>
    </>
  );
}
