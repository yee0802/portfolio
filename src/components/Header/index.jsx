import "./index.css";

export default function Header() {
  return (
    <header className="header">
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
    </header>
  );
}
