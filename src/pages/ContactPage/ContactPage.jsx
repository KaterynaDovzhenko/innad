import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./ContactPage.module.css";

export default function ContactPage() {
  const { t } = useTranslation();

  const contactInfo = t("contactForm.contactInfo.items", {
    returnObjects: true,
  });

  return (
    <section id="contact" className={css.section}>
      <div className={css.container}>
        <div className={css.rightContainer}>
          {" "}
          <h2 data-aos="fade-up" data-aos-delay="100" className={css.title}>
            {t("contactForm.title")}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className={css.description}
          >
            {t("contactForm.description")}
          </p>
          <div>
            <h3 data-aos="fade-up" data-aos-delay="100">
              {t("contactForm.contactInfo.title")}
            </h3>
            <ul>
              {contactInfo.map((item, index) => (
                <li data-aos="fade-up" data-aos-delay="200" key={index}>
                  <p>{item.icon}</p>
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
    </section>
  );
}
