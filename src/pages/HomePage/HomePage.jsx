import css from "./HomePage.module.css";
import profileWebp from "../../img/profile.webp";
import profileJpg from "../../img/profile.jpg";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className={css.content}>
      <div className={css.container}>
        <h1>Inna</h1>
        <h1 className={css.title}>Dovzhenko</h1>
        <p>{t("text-homepage")}</p>
      </div>
      <picture>
        <source srcSet={profileWebp} type="image/webp" />
        <source srcSet={profileJpg} />
        <img
          className={css.img}
          src={profileJpg}
          alt="Inna Dovzhenko english tutor"
        />
      </picture>
      <div className={css.bg}></div>
      <ContactBtn></ContactBtn>
    </div>
  );
}
