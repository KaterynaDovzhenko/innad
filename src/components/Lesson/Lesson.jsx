import css from "./Lesson.module.css";
import "../../variables.css";

export default function Lesson({ lesson, index }) {
  const bgColor = index % 2 === 0 ? css.primary : css.secondary;
  return (
    <li className={css.card}>
      <div className={css.inner}>
        <div className={`${css.front} ${bgColor}`}>
          <img src={lesson.icon} alt={lesson.title} className={css.image} />
          <h4 className={css.title}>{lesson.title}</h4>
        </div>
        <div className={`${css.back} ${bgColor}`}>
          <p>{lesson.backText}</p>
        </div>
      </div>
    </li>
  );
}
