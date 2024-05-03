import html from "../../assets/icons/HTML5_Badge.svg";
import css from "../../assets/icons/CSS3_logo.svg";
import javascript from "../../assets/icons/JS_logo.svg";
import react from "../../assets/icons/react.svg";
import nodeJS from "../../assets/icons/node-js.svg";
import express from "../../assets/icons/express.svg";
import postgreSQL from "../../assets/icons/Postgresql_elephant.svg";
import prisma from "../../assets/icons/prisma-3.svg";
import jasmine from "../../assets/icons/jasmine-icon.svg";
import git from "../../assets/icons/Git_icon.svg";
import typescript from "../../assets/icons/TS_logo.svg";
import mongodb from "../../assets/icons/mongodb.svg";
import docker from "../../assets/icons/docker_logo.svg";
import tailwindcss from "../../assets/icons/Tailwind_CSS_Logo.svg";
import "./index.css";

export default function Skills() {
  const skills = [
    {
      title: "HTML5",
      image: html,
      link: "https://www.w3.org/html/",
    },
    {
      title: "CSS3",
      image: css,
      link: "https://www.w3schools.com/css/",
    },
    {
      title: "JavaScript",
      image: javascript,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
    },
    {
      title: "TypeScript",
      image: typescript,
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "ReactJS",
      image: react,
      link: "https://reactjs.org/",
    },
    {
      title: "NodeJS",
      image: nodeJS,
      link: "https://nodejs.org/",
    },
    {
      title: "ExpressJS",
      image: express,
      link: "https://expressjs.com/",
    },
    {
      title: "PostgreSQL",
      image: postgreSQL,
      link: "https://postgresql.org/",
    },
    {
      title: "Prisma",
      image: prisma,
      link: "https://www.prisma.io/",
    },
    {
      title: "Jasmine",
      image: jasmine,
      link: "https://jasmine.github.io/",
    },
    {
      title: "Git",
      image: git,
      link: "https://git-scm.com/",
    },
    {
      title: "MongoDB",
      image: mongodb,
      link: "https://www.mongodb.com/",
    },
    {
      title: "Docker",
      image: docker,
      link: "https://www.docker.com/",
    },
    {
      title: "TailwindCSS",
      image: tailwindcss,
      link: "https://tailwindcss.com/",
    },
  ];

  return (
    <section className="skills card">
      <h1>Tech Stack</h1>

      <ul className="skills__list">
        {skills.map((skill, idx) => (
          <li key={idx} className="skills__list__item">
            <a href={skill.link} target="_blank">
              <img src={skill.image} alt={skill.title} width={50} height={50} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
