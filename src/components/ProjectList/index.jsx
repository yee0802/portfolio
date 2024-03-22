import ProjectListItem from "../ProjectListItem";
import "./index.css";

export default function ProjectList() {
  const projects = [
    {
      tags: ["Frontend"],
      title: "Spotify Layout",
      desc: "This project was an early challenge set during my enrollment of the bootcamp, I'm particularly proud of the progress I made during these times and this is a highlight of that period. I used HTML & CSS to implement a static layout of the Spotify Premium homepage.",
      repo: null,
    },
    {
      tags: ["Frontend", "Backend"],
      title: "Stylish",
      desc: "My first full-stack application, Stylish is an e-commerce website with features that include ability to checkout with Stripe and user login/registration via email.",
      repo: null,
    },
    {
      tags: ["???", "???", "???"],
      title: "In progress...",
      desc: "Exciting new projects are currently being made... Check back soon!",
      repo: null,
    },
  ];

  return (
    <ul className="my-projects__gallery__list">
      {projects.map((project, idx) => (
        <ProjectListItem
          key={idx}
          tags={project.tags}
          title={project.title}
          desc={project.desc}
          repo={project.repo}
          classname={project.classname}
        />
      ))}
    </ul>
  );
}
