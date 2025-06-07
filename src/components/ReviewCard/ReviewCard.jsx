import css from "./ReviewCard.module.css";

export default function ReviewCard({ review, show }) {
  return (
    <div className={`${css.card} ${show ? css.show : ""}`}>
      <div className={css.stars}>{"★".repeat(review.stars)}</div>
      <p className={css.text}>{review.text}</p>
    </div>
  );
}
