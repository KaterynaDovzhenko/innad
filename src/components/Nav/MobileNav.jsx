import ChangeLangBtn from "../ChangeLangBtn/ChangeLangBtn";

import { useTranslation } from "react-i18next";
import MobileMenuModal from "../MobileMenuModal/MobileMenuModal";
import HamburgerButton from "../HamburgerButton/HamburgerButton";

import css from "./Nav.module.css";
import { useState } from "react";

export default function MobileNav({ isFooter = true }) {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  if (isFooter) {
    // TOP FIXED NAV
    return (
      <nav className={css.mobileNav}>
        <div className={css.mobilecontainer}>
          <a href="#home" className={css.home}>
            Inna
          </a>
          <ChangeLangBtn />
        </div>
        <HamburgerButton isOpen={menuOpen} onClick={toggleMenu} />
        <MobileMenuModal isOpen={menuOpen} onClose={closeMenu} />
      </nav>
    );
  }

  // FOOTER NAV
  return (
    <ul className={css.footerList}>
      <li>
        <a href="#about">{t("nav.about")}</a>
      </li>
      <li>
        <a href="#classes">{t("nav.lessons")}</a>
      </li>
      <li>
        <a href="#pricing">{t("nav.pricing")}</a>
      </li>
      <li>
        <a href="#reviews">{t("nav.reviews")}</a>
      </li>
      <li>
        <a href="#contact">{t("nav.contact")}</a>
      </li>
    </ul>
  );
}
