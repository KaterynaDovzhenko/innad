import Nav from "../Nav/Nav";
import SocialMediaList from "../SocialMediaList/SocialMediaList";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.top}>
          <div className={css.colLeft}>
            <p data-aos="fade-down" className={css.name}>
              Inna
            </p>
            <p data-aos="fade-down" data-aos-delay="100" className={css.name}>
              Dovzhenko
            </p>
          </div>

          <div className={css.colMid}>
            <Nav isFooter={false} />
          </div>

          <div className={css.colRight}>
            <a
              data-aos="fade-left"
              data-aos-delay="100"
              className={css.email}
              href="mailto:inna.dovzhenko@gmail.com"
            >
              inna.dovzhenko@gmail.com
            </a>
            <SocialMediaList />
          </div>
        </div>

        <div className={css.bottom}>
          <p className={css.rights}>Rights reserved © 2026</p>
        </div>
      </div>
    </footer>
  );
}
