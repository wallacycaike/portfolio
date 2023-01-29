import { ProjectsCard } from "./ProjectsCard";
import { SkillsArea } from "./SkillsArea";
import "./styles.scss";

const projects = [
  {
    projectImg: "./src/assets/img/project_url_shortener.png",
    altImg: "imagem do URL Shortener",
    projectSubtitle: "Web",
    projectTitle: "URL Shortener",
    projectLink: "https://wat-shortener.vercel.app/",
  },
  {
    projectImg: "./src/assets/img/project_ip_tracker.png",
    altImg: "imagem do Ip Tracker",
    projectSubtitle: "Web",
    projectTitle: "Ip Tracker",
    projectLink: "https://wat-ip-tracker.vercel.app/",
  },
  {
    projectImg: "./src/assets/img/project_advice_generator.png",
    altImg: "imagem Advice Generator",
    projectSubtitle: "Web",
    projectTitle: "Advice Generator",
    projectLink: "https://wat-advice-generator.vercel.app/",
  },
  {
    projectImg: "./src/assets/img/project_weather_date.png",
    altImg: "imagem Relógio & Clima",
    projectSubtitle: "Web",
    projectTitle: "Relógio & Clima",
    projectLink: "https://wat-tempo.vercel.app/",
  },
  {
    projectImg: "./src/assets/img/project_todo_list.png",
    altImg: "imagem Lista de tarefas",
    projectSubtitle: "Web",
    projectTitle: "Lista de tarefas",
    projectLink: "https://wat-tarefas.vercel.app/",
  },
  {
    projectImg: "./src/assets/img/project_fylo_landing_page.png",
    altImg: "imagem Fylo landing page",
    projectSubtitle: "Web",
    projectTitle: "Fylo landing page",
    projectLink: "https://wat-fylo.vercel.app/",
  },
  {
    projectImg: "./src/assets/img/project_responsive_404_page.png",
    altImg: "imagem Responsive 404 Page",
    projectSubtitle: "Web",
    projectTitle: "Responsive 404 Page",
    projectLink: "https://wallacycaike.github.io/Projeto-Responsive-404-Page/",
  },
];

const primarySkills = [
  {
    skillName: "HTML",
    skillLevel: "Avançado",
  },
  {
    skillName: "CSS",
    skillLevel: "Avançado",
  },
  {
    skillName: "JavaScript",
    skillLevel: "Intermediário",
  },
];

const secondarySkills = [
  {
    skillName: "Git",
    skillLevel: "Intermediário",
  },
  {
    skillName: "SASS",
    skillLevel: "Intermediário",
  },
  {
    skillName: "React",
    skillLevel: "Intermediário",
  },
];

const firstOthersSkills = [
  {
    skillName: "React Router",
    skillLevel: "Intermediário",
  },
  {
    skillName: "React Hook Form",
    skillLevel: "Intermediário",
  },
  {
    skillName: "Vite",
    skillLevel: "Intermediário",
  },
];

const secondOthersSkills = [
  {
    skillName: "Axios",
    skillLevel: "Básico",
  },
  {
    skillName: "Chakra UI",
    skillLevel: "Básico",
  },
];

export const FiltersSections = ({ tabActive }) => {
  return (
    <div className="filters__sections">
      <div
        className={`projects__content ${
          tabActive === "projects" ? "filters__active" : ""
        }`}
        // data-content
        // id="projects"
      >
        {projects.map((project) => (
          <ProjectsCard
            key={project.projectTitle}
            cardImg={project.projectImg}
            altImg={project.altImg}
            cardSubtitle={project.projectSubtitle}
            cardTitle={project.projectTitle}
            cardLink={project.projectLink}
          />
        ))}
      </div>

      <div
        className={`skills__content  ${
          tabActive === "skills" ? "filters__active" : ""
        }`}
        // data-content
        // id="skills"
      >
        <SkillsArea
          skillTitle={"Tecnologias Principais"}
          primarySkills={primarySkills}
          secondarySkills={secondarySkills}
        />
        <SkillsArea
          skillTitle={"Outras"}
          primarySkills={firstOthersSkills}
          secondarySkills={secondOthersSkills}
        />
      </div>
    </div>
  );
};
