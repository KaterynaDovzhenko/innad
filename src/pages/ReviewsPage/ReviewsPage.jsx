import Title from "../../components/Title/Title";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import { useTranslation } from "react-i18next";
import bgJpg from "../../img/bg.jpg";
import bgWebp from "../../img/bg.webp";

import css from "./ReviewsPage.module.css";

export default function ReviewsPage() {
  const { t } = useTranslation();

  return (
    <section>
      <Title>{t("reviews.title")}</Title>
      <div className={css.container}>
        <div className={css.leftBox}>
          <picture>
            <source srcSet={bgWebp} type="image/webp" />
            <source srcSet={bgJpg} type="image/jpeg" />
            <img
              className={css.img}
              src={bgJpg}
              alt="Inna Dovzhenko english tutor"
            />
          </picture>
          <div className={css.textContainer}>
            <h3 className={css.text}>{t("reviews.text")}</h3>
          </div>
        </div>
        <div className={css.RightBox}>
          <ReviewsList></ReviewsList>
        </div>
      </div>
    </section>
  );
}
