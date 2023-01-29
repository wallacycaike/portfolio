import "./styles.scss";

export const ProfileInfoGroup = ({ infoNumber, infoDescription }) => {
  return (
    <div className="profile__info-group">
      <h3 className="profile__info-number">{infoNumber}</h3>
      <p className="profile__info-description">{infoDescription}</p>
    </div>
  );
};
