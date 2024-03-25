import hero from "../../assets/hero.png";
import "./index.css";

const loadImage = () => {
  const blurImage = document.querySelector(".about-me__image");

  if (blurImage.complete) {
    blurImage.classList.add("loaded");
  }
};

export default function AboutMe() {
  return (
    <section className="about-me card">
      <section className="about-me__image__container">
        <img
          src={hero}
          alt="close up of a monitor with code"
          className="about-me__image"
          loading="lazy"
          onLoad={loadImage}
        />
      </section>

      <article className="about-me__info__container">
        <h1>About Me</h1>

        <p>
          I'm an aspiring Full-Stack Software Developer located in Bath,
          England. Armed with fresh knowledge and hands-on experience from a
          rigorous 6-month intensive bootcamp, I am eager to contribute my
          creativity and technical prowess to your team.
        </p>

        <div className="resume__box">
          <p>For more details</p>
          <a href={hero} download="hero.png" className="resume__box-button">
            <button>Download CV</button>
          </a>
        </div>
      </article>
    </section>
  );
}
