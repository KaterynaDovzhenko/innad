import Title from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import CategoryList from "../../components/CategoryList/CategoryList";
import Blur from "../../components/Blur/Blur";
import css from "./LessonsPage.module.css";

export default function LessonsPage() {
  const { t } = useTranslation();
  return (
    <section id="classes" className={css.section}>
      <Title>{t("lessons.title")}</Title>
      <p data-aos="fade-up" data-aos-delay="200" className={css.text}>
        {t("lessons.text")}
      </p>
      <CategoryList></CategoryList>
      <Blur className={css.blur}></Blur>
    </section>
  );
}
