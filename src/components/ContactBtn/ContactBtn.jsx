import "../../variables.css";
import css from "./ContactBtn.module.css";
import { useTranslation } from "react-i18next";

export default function ContactBtn() {
  const { t } = useTranslation();

  return <button className={css.btn}>{t("contact-btn")}</button>;
}
