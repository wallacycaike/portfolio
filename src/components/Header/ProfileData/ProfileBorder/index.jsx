import "./styles.scss";
import perfilImg from "../../../../assets/img/perfil.png";

export const ProfileBorder = () => {
  return (
    <div className="profile__border">
      <div className="profile__perfil">
        <img src={perfilImg} alt="foto de perfil do Wallacy Caike" />
      </div>
    </div>
  );
};
