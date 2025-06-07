import { useState } from "react";
import css from "./Category.module.css";

export default function Category({ category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={css.item}
    >
      <div className={css.content}>
        <h4 className={css.title}>{category.title}</h4>
        <p>{category.description}</p>
      </div>
      <div className={`${css.imageWrapper} ${hovered ? css.visible : ""}`}>
        <img src={category.image} alt={category.label} className={css.img} />
      </div>
    </li>
  );
}
