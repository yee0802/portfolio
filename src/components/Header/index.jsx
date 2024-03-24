import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <h1>Kye</h1>

        <nav className="header__nav">
          <ul className="header__nav__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>

        <section className="header__links">
          <a
            className="header__link"
            href="https://github.com/yee0802"
            target="_blank"
          >
            <img src={githubIcon} alt="GitHub Logo" />
          </a>

          <a
            className="header__link"
            href="https://linkedin.com/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn logo" />
          </a>
        </section>
      </section>
    </header>
  );
}
