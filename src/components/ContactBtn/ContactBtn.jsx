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
    <div data-aos="fade-up" data-aos-delay="300">
      <a
        href="#contact"
        className={`${css.btn} ${fullWidth ? css.fullWidth : ""} ${
          variant === "default" ? css.default : ""
        }`}
        onClick={onClick}
      >
        {t(labelKey)}
      </a>
    </div>
  );
}
