import css from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {
  return (
    <div className={css.card}>
      <div className={css.stars}>{"★".repeat(review.stars)}</div>
      <p className={css.text}>{review.text}</p>
      {(review.name || review.sub) && (
        <div className={css.reviewer}>
          <div className={css.avatar}>
            {review.name ? review.name.slice(0, 2).toUpperCase() : "??"}
          </div>
          <div>
            {review.name && <p className={css.reviewerName}>{review.name}</p>}
            {review.sub && <p className={css.reviewerSub}>{review.sub}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
