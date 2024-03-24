import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import "./index.css";

const handleHamburgerMenuClick = () => {
  const hamburgerMenu = document.querySelector(".hamburger__menu");
  const hamburgerIcon = document.querySelector(".header__hamburger > img");

  hamburgerMenu.classList.remove("active");
  hamburgerIcon.classList.remove("active");
};

export default function HamburgerMenu() {
  return (
    <nav className="hamburger__menu">
      <ul className="hamburger__menu__list">
        <li className="hamburger__menu__list__item">
          <a href="#" onClick={handleHamburgerMenuClick}>
            Home
          </a>
        </li>

        <li className="hamburger__menu__list__item">
          <a href="#projects" onClick={handleHamburgerMenuClick}>
            Projects
          </a>
        </li>

        <li className="hamburger__menu__list__links">
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
        </li>
      </ul>
    </nav>
  );
}
