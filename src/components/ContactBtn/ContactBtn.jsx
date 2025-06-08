import "../../variables.css";
import css from "./ContactBtn.module.css";
import { useTranslation } from "react-i18next";

export default function ContactBtn({
  labelKey = "contact-btn",
  fullWidth = false,
  variant,
  onClick,
}) {
  const { t } = useTranslation();

  return (
    <a
      data-aos="fade-up"
      data-aos-delay="300"
      href="#contact"
      className={`${css.btn} ${fullWidth ? css.fullWidth : ""} ${
        variant === "default" ? css.default : ""
      }`}
      onClick={onClick}
    >
      {t(labelKey)}
    </a>
  );
}
