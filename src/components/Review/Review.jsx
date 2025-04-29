import css from "./Review.module.css";

export default function Review({ review }) {
  return (
    <div className={css.card}>
      <div className={css.stars}>{"★".repeat(review.stars)}</div>
      <p className={css.text}>{review.text}</p>
    </div>
  );
}
