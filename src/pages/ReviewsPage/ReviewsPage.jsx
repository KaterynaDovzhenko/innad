import Title from "../../components/Title/Title";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useTranslation } from "react-i18next";
import bgJpg from "../../img/bg.jpg";
import bgWebp from "../../img/bg.webp";
import arrowPrevIcon from "../../img/arrow_prev-icon.svg";
import arrowNextIcon from "../../img/arrow_next-icon.svg";

import useIsTablet from "../../hooks/useIsTablet";

import css from "./ReviewsPage.module.css";
import { useEffect, useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

export default function ReviewsPage() {
  const { t } = useTranslation();
  const isTablet = useIsTablet();

  const reviews = t("reviews.list", { returnObjects: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  const handleNext = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setShow(true);
    }, 100);
  }, [reviews.length]);

  const handlePrev = () => {
    setShow(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setShow(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const handlers = useSwipeable({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id="reviews">
      <Title>{t("reviews.title")}</Title>
      <p data-aos="fade-up" data-aos-delay="200" className={css.text}>
        {t("reviews.text")}
      </p>
      <div className={css.container}>
        {!isTablet && (
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className={css.leftBox}
          >
            <picture>
              <source srcSet={bgWebp} type="image/webp" />
              <source srcSet={bgJpg} type="image/jpeg" />
              <img
                className={css.img}
                src={bgJpg}
                alt="Inna Dovzhenko english tutor"
              />
            </picture>
          </div>
        )}
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className={css.RightBox}
        >
          <div className={css.cardWrapper} {...handlers}>
            <div className={css.progressBar}>
              <div
                key={currentIndex}
                className={css.progress}
                style={{ animationDuration: "6s" }}
              ></div>
            </div>
            <ReviewCard review={reviews[currentIndex]} show={show}></ReviewCard>
            <div className={css.arrows}>
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className={css.arrowLeft}
              >
                <img src={arrowPrevIcon} alt="Arrow icon" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className={css.arrowRight}
              >
                <img src={arrowNextIcon} alt="Arrow icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
