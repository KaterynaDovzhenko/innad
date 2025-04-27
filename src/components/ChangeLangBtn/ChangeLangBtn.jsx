import "../../variables.css";
// import css from "./ChangeLangBtn.module.css";
import { useTranslation } from "react-i18next";

export default function ChangeLangBtn() {
  // return <button className={css.btn}>Lang</button>;
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ru")}>Русский</button>
    </div>
  );
}
