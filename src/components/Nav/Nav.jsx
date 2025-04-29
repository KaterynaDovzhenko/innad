import ChangeLangBtn from "../ChangeLangBtn/ChangeLangBtn";
import css from "./Nav.module.css";
import { useTranslation } from "react-i18next";

export default function Nav({ isFooter = true }) {
  const { t } = useTranslation();
  const containerClass = isFooter ? css.container : css.footerContainer;
  const listClass = isFooter ? css.list : css.footerList;
  return (
    <div className={containerClass}>
      <nav>
        <ul className={listClass}>
          <li>
            <a href="">{t("nav.home")}</a>
          </li>
          <li>
            <a href="">{t("nav.about")}</a>
          </li>
          <li>
            <a href="">{t("nav.lessons")}</a>
          </li>
          <li>
            <a href="">{t("nav.pricing")}</a>
          </li>
          <li>
            <a href="">{t("nav.reviews")}</a>
          </li>
          {isFooter && (
            <li>
              <a href="">{t("nav.contact")}</a>
            </li>
          )}
        </ul>
      </nav>
      {isFooter && <ChangeLangBtn></ChangeLangBtn>}
    </div>
  );
}
