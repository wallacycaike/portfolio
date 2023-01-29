import { ProfileInfoGroup } from "./ProfileInfoGroup";
import "./styles.scss";

export const ProfileInfo = () => {
  return (
    <div className="profile__info grid">
      <ProfileInfoGroup
        infoNumber={1.1}
        infoDescription={
          <>
            Ano de <br /> trabalho
          </>
        }
      />
      <ProfileInfoGroup
        infoNumber={22}
        infoDescription={
          <>
            Projetos <br /> completos
          </>
        }
      />
      <ProfileInfoGroup
        infoNumber={"+3"}
        infoDescription={
          <>
            Tecnologias <br /> em estudo
          </>
        }
      />
    </div>
  );
};
