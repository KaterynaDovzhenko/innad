import ChangeLangBtn from "../ChangeLangBtn/ChangeLangBtn";
import css from "./Nav.module.css";
import { useTranslation } from "react-i18next";

export default function Nav({ isFooter = true, activeSection }) {
  const { t } = useTranslation();

  const containerClass = isFooter ? css.container : css.footerContainer;
  const listClass = isFooter ? css.list : css.footerList;

  const getActiveSection = (section) =>
    activeSection === section ? css.active : "";

  return (
    <div className={containerClass}>
      {isFooter && (
        <a href="#home" className={css.home}>
          Inna
        </a>
      )}
      <nav>
        <ul className={listClass}>
          <li>
            <a href="#about" className={getActiveSection("about")}>
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a href="#classes" className={getActiveSection("classes")}>
              {t("nav.lessons")}
            </a>
          </li>
          <li>
            <a href="#pricing" className={getActiveSection("pricing")}>
              {t("nav.pricing")}
            </a>
          </li>
          <li>
            <a href="#reviews" className={getActiveSection("reviews")}>
              {t("nav.reviews")}
            </a>
          </li>
          {isFooter && (
            <li>
              <a href="#contact" className={getActiveSection("contact")}>
                {t("nav.contact")}
              </a>
            </li>
          )}
        </ul>
      </nav>
      {isFooter && <ChangeLangBtn></ChangeLangBtn>}
    </div>
  );
}
