import Title from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import LessonList from "../../components/LessonList/LessonList";
import css from "./LessonsPage.module.css";

export default function LessonsPage() {
  const { t } = useTranslation();
  return (
    <section className={css.section}>
      <Title>{t("lessons.title")}</Title>
      <h3 className={css.text}>{t("lessons.text")}</h3>
      <LessonList></LessonList>
    </section>
  );
}
