import { useState } from "react";
import css from "./Category.module.css";
import useIsTablet from "../../hooks/useIsTablet.js";

export default function Category({ category }) {
  const [hovered, setHovered] = useState(false);
  const isTablet = useIsTablet();

  return (
    <li
      data-aos="fade-up"
      data-aos-delay="200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={css.item}
    >
      <div className={css.content}>
        <h4 className={css.title}>{category.title}</h4>
        <p>{category.description}</p>
      </div>
      {!isTablet && (
        <div className={`${css.imageWrapper} ${hovered ? css.visible : ""}`}>
          <img src={category.image} alt={category.label} className={css.img} />
        </div>
      )}
    </li>
  );
}
