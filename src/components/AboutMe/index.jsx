import hero from "../../assets/hero.png";
import "./index.css";

export default function AboutMe() {
  return (
    <section className="about-me card">
      <img src={hero} alt="close up of a monitor with code" />

      <article className="about-me__info__container">
        <h1>About Me</h1>

        <p>
          I'm an aspiring Full-Stack Software Developer located in Bath,
          England. Armed with fresh knowledge and hands-on experience from a
          rigorous 6-month intensive bootcamp, I am eager to contribute my
          creativity and technical prowess to your team.
        </p>
      </article>
    </section>
  );
}
