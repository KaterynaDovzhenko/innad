import Title from "../../components/Title/Title";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useTranslation } from "react-i18next";
import css from "./ReviewsPage.module.css";
import { useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import useIsTablet from "../../hooks/useIsTablet";
import arrowPrevIcon from "../../img/arrow_prev-icon.svg";
import arrowNextIcon from "../../img/arrow_next-icon.svg";

export default function ReviewsPage() {
  const { t } = useTranslation();
  const isTablet = useIsTablet();
  const reviews = t("reviews.list", { returnObjects: true });
  const doubled = [...reviews, ...reviews];

  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scrollBy = (dir) => {
    posRef.current += dir * 320;
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    if (posRef.current < 0) posRef.current += halfWidth;
    if (posRef.current >= halfWidth) posRef.current -= halfWidth;
  };

  const handlers = useSwipeable({
    onSwipeLeft: () => scrollBy(1),
    onSwipeRight: () => scrollBy(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  return (
    <section id="reviews" className={css.section}>
      <div className={css.header}>
        <Title data-aos="fade-up" data-aos-delay="100">
          {t("reviews.title")}
        </Title>
        <p data-aos="fade-up" data-aos-delay="100" className={css.text}>
          {t("reviews.text")}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className={css.trackWrap}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        {...handlers}
      >
        <div className={css.track} ref={trackRef}>
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
        <div className={css.fadeLeft} />
        <div className={css.fadeRight} />
      </div>

      {isTablet && (
        <div className={css.arrows}>
          <button
            className={css.arrowBtn}
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
          >
            <img src={arrowPrevIcon} alt="" />
          </button>
          <button
            className={css.arrowBtn}
            onClick={() => scrollBy(1)}
            aria-label="Next"
          >
            <img src={arrowNextIcon} alt="" />
          </button>
        </div>
      )}
    </section>
  );
}
