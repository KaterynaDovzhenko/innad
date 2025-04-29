import imgJpg from "../../img/footer-img.jpg";
import imgWebp from "../../img/footer-img.webp";
import Nav from "../Nav/Nav";
import SocialMediaList from "../SocialMediaList/SocialMediaList";
import css from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.topContainer}>
          <picture>
            <source srcSet={imgWebp} type="image/webp" />
            <source srcSet={imgJpg} type="image/jpeg" />
            <img
              className={css.img}
              src={imgJpg}
              alt="Inna Dovzhenko english tutor"
            />
          </picture>
          <div className={css.rightContainer}>
            <div className={css.linkContainer}>
              <div>
                <h2 className={css.title}>{t("footer.nav")}</h2>
                <Nav isFooter={false}></Nav>
              </div>
              <div>
                <h2 className={css.title}>{t("footer.contact")}</h2>
                <a className={css.email} href="inna.dovzhenko@gmail.com">
                  inna.dovzhenko@gmail.com
                </a>
              </div>
            </div>
            <SocialMediaList></SocialMediaList>
          </div>
        </div>
        <p className={css.rights}>Right are reserved @2025</p>
      </div>
    </footer>
  );
}
