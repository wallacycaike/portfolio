import "./styles.scss";

export const ProfileSocial = () => {
  return (
    <ul className="profile__social">
      <a
        href="https://www.instagram.com/caikematoos"
        target="_blank"
        className="profile__social-link"
      >
        <i className="ri-instagram-line"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/wallacy-caike/"
        target="_blank"
        className="profile__social-link"
      >
        <i className="ri-linkedin-box-line"></i>
      </a>
      <a
        href="https://github.com/wallacycaike"
        target="_blank"
        className="profile__social-link"
      >
        <i className="ri-github-line"></i>
      </a>
    </ul>
  );
};
