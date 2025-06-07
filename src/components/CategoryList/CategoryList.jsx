import kids from "../../img/kids.jpg";
import teens from "../../img/teens.jpg";
import exam from "../../img/exam.jpg";
import business from "../../img/business.jpg";
import courses from "../../img/courses.jpg";

import Category from "../Category/Category";
import css from "./CategoryList.module.css";

import { useTranslation } from "react-i18next";

const imgs = [kids, teens, exam, business, courses];

export default function CategoryList() {
  const { t } = useTranslation();
  const list = t("lessons.list", { returnObjects: true });

  const categoriesWithImg = list.map((category, index) => ({
    ...category,
    image: imgs[index],
  }));
  return (
    <ul className={css.list}>
      {categoriesWithImg.map((category, index) => (
        <Category key={index} category={category}></Category>
      ))}
    </ul>
  );
}
