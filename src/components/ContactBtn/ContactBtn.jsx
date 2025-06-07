import "../../variables.css";
import css from "./ContactBtn.module.css";
import { useTranslation } from "react-i18next";

export default function ContactBtn({
  labelKey = "contact-btn",
  fullWidth = false,
  variant,
}) {
  const { t } = useTranslation();

  return (
    <a
      href="#contact"
      className={`${css.btn} ${fullWidth ? css.fullWidth : ""} ${
        variant === "default" ? css.default : ""
      }`}
    >
      {t(labelKey)}
    </a>
  );
}
