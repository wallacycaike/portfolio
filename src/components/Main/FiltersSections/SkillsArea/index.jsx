import { SkillsData } from "./SkillsData";
import "./styles.scss";

export const SkillsArea = ({ skillTitle, primarySkills, secondarySkills }) => {
  return (
    <div className="skills__area">
      <h3 className="skills__title">{skillTitle}</h3>

      <div className="skills__box">
        <div className="skills__group">
          {primarySkills.map((skill, index) => (
            <SkillsData
              key={index}
              skillName={skill.skillName}
              skillLevel={skill.skillLevel}
            />
          ))}
        </div>
        <div className="skills__group">
          {secondarySkills.map((skill, index) => (
            <SkillsData
              key={index}
              skillName={skill.skillName}
              skillLevel={skill.skillLevel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
