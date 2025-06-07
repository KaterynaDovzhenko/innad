import Title from "../../components/Title/Title";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import FactList from "../../components/FactList/FactList";
import css from "./AboutPage.module.css";
import { useTranslation } from "react-i18next";
import Icon from "../../img/education-icon.svg";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <section id="about" className={css.section}>
      <div className={css.container}>
        <Title>{t("about.title")}</Title>
        <div className={css.content}>
          <div className={css.left}>
            <h3 className={css.title}>{t("about.header")}</h3>
            <ContactBtn></ContactBtn>
          </div>
          <div className={css.right}>
            <p>{t("about.text")}</p>
          </div>
        </div>
        <img
          src={Icon}
          alt="Education Icon"
          className={`${css.icon} ${css.iconBig}`}
        />
        <img
          src={Icon}
          alt="Education Icon"
          className={`${css.icon} ${css.iconSmall}`}
        />
      </div>
      <FactList></FactList>
    </section>
  );
}
