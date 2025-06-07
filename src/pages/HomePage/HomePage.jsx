import css from "./HomePage.module.css";
import profileWebp from "../../img/profile.webp";
import profileJpg from "../../img/profile.jpg";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <section id="home" className={css.container}>
      <div className={css.content}>
        <div className={css.containerTitle}>
          <h1>Inna</h1>
          <h1 className={css.title}>Dovzhenko</h1>
          <div className={css.tutorWrapper}>
            <div className={css.line}></div>
            <span className={css.label}>{t("title")}</span>
            <div className={css.line}></div>
          </div>
          <p>{t("text-homepage")}</p>
          <ContactBtn></ContactBtn>
        </div>
        <div className={css.rightContainer}>
          <picture>
            <source srcSet={profileWebp} type="image/webp" />
            <source srcSet={profileJpg} type="image/jpeg" />
            <img
              className={css.img}
              src={profileJpg}
              alt="Inna Dovzhenko english tutor"
            />
          </picture>
          <div className={css.badge + " " + css.badgeBottomLeft}>
            <p className={css.badgeNumber}>25+</p>
            <p className={css.badgeLabel}>{t("badgeYears")}</p>
          </div>
          <div className={css.badge + " " + css.badgeTopRight}>
            <p className={css.badgeNumber}>200+</p>
            <p className={css.badgeLabel}>{t("badgeStudents")}</p>
          </div>
        </div>
      </div>
      <ul className={css.listLangTop}>
        <li>A1</li>
        <li>A2</li>
        <li>B1</li>
        <li>B2</li>
        <li>C1</li>
        <li>C2</li>
      </ul>
      <ul className={css.listLangBtm}>
        <li>A1</li>
        <li>A2</li>
        <li>B1</li>
        <li>B2</li>
        <li>C1</li>
        <li>C2</li>
      </ul>
    </section>
  );
}
