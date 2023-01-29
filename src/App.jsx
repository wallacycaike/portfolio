import { useEffect } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

import "./assets/scss/variables.scss";
import "./assets/scss/globals.scss";

/*=============== SCROLL REVEAL ANIMATION ===============*/
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

function App() {
  useEffect(() => {
    sr.reveal(`.profile__border`);
    sr.reveal(`.profile__name`, { delay: 500 });
    sr.reveal(`.profile__profession`, { delay: 600 });
    sr.reveal(`.profile__social`, { delay: 700 });
    sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
    sr.reveal(`.profile__buttons`, { delay: 800 });
    sr.reveal(`.filters__content`, { delay: 900 });
    sr.reveal(`.filters`, { delay: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
