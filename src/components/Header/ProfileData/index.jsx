import { ProfileBorder } from "./ProfileBorder";
import { ProfileSocial } from "./ProfileSocial";
import "./styles.scss";

export const ProfileData = () => {
  return (
    <div className="profile__data">
      <ProfileBorder />

      <h2 className="profile__name">Wallacy Caike</h2>
      <h3 className="profile__profession">Desenvolvedor Front-end</h3>

      <ProfileSocial />
    </div>
  );
};
