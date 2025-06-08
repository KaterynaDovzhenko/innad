import css from "./Title.module.css";

export default function Title({ children }) {
  return (
    <h2 data-aos="fade-up" data-aos-delay="100" className={css.title}>
      {children}
    </h2>
  );
}
