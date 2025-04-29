import "../../variables.css";
import css from "./ChangeLangBtn.module.css";
import { useTranslation } from "react-i18next";

export default function ChangeLangBtn() {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const isEnglish = i18n.language === "en";
  const isUkrainian = i18n.language === "uk";

  return (
    <div className={css.container}>
      <button
        className={isEnglish ? css.activeBtn : css.defaultBtn}
        onClick={() => changeLanguage("en")}
      >
        🇬🇧
      </button>
      <button
        className={isUkrainian ? css.activeBtn : css.defaultBtn}
        onClick={() => changeLanguage("uk")}
      >
        🇺🇦
      </button>
    </div>
  );
}
