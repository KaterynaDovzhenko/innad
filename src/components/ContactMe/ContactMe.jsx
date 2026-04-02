import ContactBtn from "../ContactBtn/ContactBtn";
import { useTranslation } from "react-i18next";
import Icon from "../../img/education-icon.svg";
import css from "./ContactMe.module.css";
import Blur from "../Blur/Blur";

export default function ContactMe() {
  const { t } = useTranslation();
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 data-aos="fade-left" data-aos-delay="100" className={css.title}>
          {t("contact.title")}
        </h3>
        <p data-aos="fade-right" data-aos-delay="200">
          {t("contact.description")}
        </p>
        <ContactBtn></ContactBtn>
      </div>
      <div className={`${css.iconWrap} ${css.iconBigWrap}`}>
        <img
          data-aos="fade-left"
          src={Icon}
          alt="Education Icon"
          className={css.icon}
        />
      </div>
      <div className={`${css.iconWrap} ${css.iconSmallWrap}`}>
        <img
          data-aos="fade-right"
          data-aos-delay="100"
          src={Icon}
          alt="Education Icon"
          className={css.icon}
        />
      </div>
      <Blur className={css.blur}></Blur>
    </section>
  );
}
