import { useTranslation } from "react-i18next";
import css from "./FactList.module.css";

export default function FactList() {
  const { t } = useTranslation();
  return (
    <ul className={css.list}>
      <li>
        <p className={css.number}>
          25 <span className={css.plus}>+</span>
        </p>
        <p>{t("about.year")}</p>
      </li>
      <li>
        <p className={css.number}>
          200 <span className={css.plus}>+</span>
        </p>
        <p>{t("about.students")}</p>
      </li>
      <li>
        <p className={css.number}>
          10 <span className={css.plus}>+</span>
        </p>
        <p>{t("about.articles")}</p>
      </li>
    </ul>
  );
}
