import { useTranslation } from "react-i18next";
import css from "./FactList.module.css";

export default function FactList() {
  const { t } = useTranslation();
  return (
    <ul className={css.list}>
      <li data-aos="fade-left" data-aos-delay="200">
        <p className={css.number}>
          25 <span className={css.plus}>+</span>
        </p>
        <p>{t("about.year")}</p>
      </li>
      <li data-aos="fade-up" data-aos-delay="300">
        <p className={css.number}>
          200 <span className={css.plus}>+</span>
        </p>
        <p>{t("about.students")}</p>
      </li>
      <li data-aos="fade-right" data-aos-delay="400">
        <p className={css.number}>
          10 <span className={css.plus}>+</span>
        </p>
        <p>{t("about.articles")}</p>
      </li>
    </ul>
  );
}
