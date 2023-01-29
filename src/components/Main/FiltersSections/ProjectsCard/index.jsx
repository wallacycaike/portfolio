import "./styles.scss";

export const ProjectsCard = ({
  cardImg,
  altImg,
  cardSubtitle,
  cardTitle,
  cardLink,
}) => {
  return (
    <article className="projects__card">
      <img src={cardImg} alt={altImg} className="projects__img" />

      <div className="projects__modal">
        <div>
          <span className="projects__subtitle">{cardSubtitle}</span>
          <h3 className="projects__title">{cardTitle}</h3>
          <a
            href={cardLink}
            target="_blank"
            className="projects__button button button__small"
          >
            <i className="ri-link"></i>
          </a>
        </div>
      </div>
    </article>
  );
};
