import ContactBtn from "../ContactBtn/ContactBtn";
import { useTranslation } from "react-i18next";
import Icon from "../../img/education-icon.svg";
import css from "./ContactMe.module.css";

export default function ContactMe() {
  const { t } = useTranslation();
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>{t("contact.title")}</h3>
        <p>{t("contact.description")}</p>
        <ContactBtn></ContactBtn>
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
    </section>
  );
}
