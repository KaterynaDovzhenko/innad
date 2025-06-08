import css from "./MobileMenuModal.module.css";
import { useTranslation } from "react-i18next";
import ContactBtn from "../ContactBtn/ContactBtn";

export default function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`${css.overlay} ${isOpen ? css.open : ""}`}
        onClick={onClose}
      ></div>
      <nav className={`${css.menu} ${isOpen ? css.open : ""}`}>
        <ul className={css.list}>
          <li style={{ "--i": 1 }}>
            <a href="#about" onClick={onClose}>
              {t("nav.about")}
            </a>
          </li>
          <li style={{ "--i": 2 }}>
            <a href="#classes" onClick={onClose}>
              {t("nav.lessons")}
            </a>
          </li>
          <li style={{ "--i": 3 }}>
            <a href="#pricing" onClick={onClose}>
              {t("nav.pricing")}
            </a>
          </li>
          <li style={{ "--i": 4 }}>
            <a href="#reviews" onClick={onClose}>
              {t("nav.reviews")}
            </a>
          </li>
        </ul>
        <ContactBtn onClick={onClose}></ContactBtn>
      </nav>
    </>
  );
}
