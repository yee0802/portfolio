import "./index.css";

export default function ProjectListItem({ tags, title, desc, repo }) {
  return (
    <li className="my-projects__gallery__list__item">
      <ul className="gallery__item__tags">
        {tags.map((tag, idx) => (
          <li key={idx} className="gallery__item__tag">
            {tag}
          </li>
        ))}
      </ul>

      <article className="gallery__item__info">
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>

      {repo && (
        <a href={repo} target="_blank">
          <button className="gallery__item__button">View more</button>
        </a>
      )}
    </li>
  );
}
