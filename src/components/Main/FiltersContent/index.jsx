import "./styles.scss";

export const FiltersContent = ({ clickOnFilter, tabActive }) => {
  return (
    <ul className="filters__content">
      <button
        className={`filters__button ${
          tabActive === "projects" ? "filter-tab-active" : ""
        }`}
        // data-target="#projects"
        onClick={() => clickOnFilter("projects")}
      >
        Projetos
      </button>

      <button
        className={`filters__button ${
          tabActive === "skills" ? "filter-tab-active" : ""
        }`}
        // data-target="#skills"
        onClick={() => clickOnFilter("skills")}
      >
        Habilidades
      </button>
    </ul>
  );
};
