import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./ContactPage.module.css";

import checkMarkIcon from "../../img/check_mark-icon.svg";

export default function ContactPage() {
  const { t } = useTranslation();

  const contactInfo = t("contactForm.contactInfo.items", {
    returnObjects: true,
  });
  const features = t("contactForm.whyChooseMe.items", {
    returnObjects: true,
  });

  return (
    <section id="contact" className={css.section}>
      <h2 className={css.title}> {t("contactForm.title")}</h2>
      <p className={css.description}> {t("contactForm.description")}</p>
      <div className={css.container}>
        <ContactForm></ContactForm>
        <div className={css.rightContainer}>
          <div>
            <h3>{t("contactForm.contactInfo.title")}</h3>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <p>{item.icon}</p>
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3> {t("contactForm.whyChooseMe.title")}</h3>
            <ul>
              {features.map((item, index) => (
                <li key={index}>
                  <img src={checkMarkIcon} alt="Check Mark icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
