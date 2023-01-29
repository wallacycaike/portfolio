import { useEffect, useRef } from "react";
import { ProfileButtons } from "./ProfileButtons";
import { ProfileData } from "./ProfileData";
import { ProfileInfo } from "./ProfileInfo";
import "./styles.scss";

export const Header = () => {
  const themeButton = useRef(null);

  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-line";

  // We obtain the current theme that the interface has by validating the dark-theme class
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.current.classList.contains(iconTheme)
      ? "ri-moon-line"
      : "ri-sun-line";

  useEffect(() => {
    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );

      themeButton.current.classList[
        selectedIcon === "ri-moon-line" ? "add" : "remove"
      ](iconTheme);
    }
  }, [themeButton]);

  const changeTheme = () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.current.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  return (
    <header className="profile container">
      <i
        className="ri-moon-line change-theme"
        id="theme-button"
        ref={themeButton}
        onClick={changeTheme}
      ></i>

      <div className="profile__container grid">
        <ProfileData />
        <ProfileInfo />
        <ProfileButtons />
      </div>
    </header>
  );
};
