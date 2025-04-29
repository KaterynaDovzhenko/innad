import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion as Motion, AnimatePresence } from "framer-motion";
import arrow from "../../img/arrow.svg";
import Review from "../Review/Review";
import css from "./ReviewsList.module.css";

export default function ReviewsList() {
  const { t } = useTranslation();
  const allReviews = t("reviews.list", { returnObjects: true });

  const visibleCount = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("down");

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(allReviews[(startIndex + i) % allReviews.length]);
    }
    return result;
  };

  const prevSlide = () => {
    setDirection("up");
    setStartIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const nextSlide = () => {
    setDirection("down");
    setStartIndex((prev) => (prev + 1) % allReviews.length);
  };

  return (
    <div className={css.slider}>
      <button onClick={prevSlide}>
        <img src={arrow} alt="Previous" className={css.arrowUp} />
      </button>

      <div className={css.listWrapper}>
        <AnimatePresence mode="wait">
          <Motion.ul
            key={startIndex}
            className={css.list}
            initial={{ y: direction === "down" ? 40 : -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction === "down" ? -40 : 40, opacity: 0 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {getVisibleReviews().map((review, index) => (
              <li key={index} className={css.slide}>
                <Review review={review} />
              </li>
            ))}
          </Motion.ul>
        </AnimatePresence>
      </div>

      <button onClick={nextSlide}>
        <img src={arrow} alt="Next" className={css.arrowDown} />
      </button>
    </div>
  );
}
