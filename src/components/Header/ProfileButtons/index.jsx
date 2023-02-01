import "./styles.scss";
import wallacyCV from "../../../assets/pdf/Cv-Wallacy-Caike.pdf";

export const ProfileButtons = () => {
  return (
    <div className="profile__buttons">
      <a download="" href={wallacyCV} className="button">
        Baixar currículo <i className="ri-download-line"></i>
      </a>

      <div className="profile__buttons-small">
        <a
          href="https://api.whatsapp.com/send?phone=5531991220633&text=Olá, Wallacy!"
          target="_blank"
          className="button button__small button__gray"
        >
          <i className="ri-whatsapp-line"></i>
        </a>

        <a
          href="mailto:w.caikee12@gmail.com"
          target="_blank"
          className="button button__small button__gray"
        >
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </div>
  );
};
