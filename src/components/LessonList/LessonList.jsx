import Lesson from "../Lesson/Lesson";
import { useTranslation } from "react-i18next";
import css from "./LessonList.module.css";

import kidIcon from "../../img/kid.svg";
import teenIcon from "../../img/teen.svg";
import examIcon from "../../img/exam.svg";
import businessIcon from "../../img/business.svg";
import courseIcon from "../../img/course.svg";

export default function LessonList() {
  const { t } = useTranslation();
  const list = t("lessons.list", { returnObjects: true });

  const icons = [kidIcon, teenIcon, examIcon, businessIcon, courseIcon];
  return (
    <ul className={css.list}>
      {list.map((lesson, index) => (
        <Lesson
          key={index}
          lesson={{ ...lesson, icon: icons[index] }}
          index={index}
        ></Lesson>
      ))}
    </ul>
  );
}
