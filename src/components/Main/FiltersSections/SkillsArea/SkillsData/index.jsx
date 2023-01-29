import "./styles.scss";

export const SkillsData = ({ skillName, skillLevel }) => {
  return (
    <div className="skills__data">
      <i className="ri-checkbox-circle-line"></i>

      <div>
        <h3 className="skills__name">{skillName}</h3>
        <span className="skills__level">{skillLevel}</span>
      </div>
    </div>
  );
};
