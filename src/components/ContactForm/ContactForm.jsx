import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { createValidationSchema } from "./validationSchema";
import emailjs from "@emailjs/browser";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const validationSchema = createValidationSchema(t);

  const selectedTemplate =
    currentLang === "uk" ? "template_wgh48ja" : "template_qbb9mdx";

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      classFormat: "individual",
      classType: "kids",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await emailjs.send(
          "service_kzcktd8",
          selectedTemplate,
          values,
          "WQaajm7b4bYxCeLaB"
        );
        alert(t("contactForm.success"));
        resetForm();
      } catch (error) {
        console.error("Failed to send email", error);
        alert(t("contactForm.error"));
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      <div data-aos="fade-up" data-aos-delay="200" className={css.field}>
        <label htmlFor="name" className={css.label}>
          {t("contactForm.fields.name")}
        </label>
        <input
          type="text"
          name="name"
          placeholder={t("contactForm.placeholders.name")}
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          required
        />
        {formik.touched.name && formik.errors.name && (
          <div className={css.error}>{formik.errors.name}</div>
        )}
      </div>
      <div className={css.contactContainer}>
        <div data-aos="fade-up" data-aos-delay="200" className={css.field}>
          <label htmlFor="phone" className={css.label}>
            {t("contactForm.fields.phone")}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={t("contactForm.placeholders.phone")}
            className={css.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            required
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className={css.error}>{formik.errors.phone}</div>
          )}
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className={css.field}>
          <label htmlFor="email" className={css.label}>
            {t("contactForm.fields.email")}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t("contactForm.placeholders.email")}
            className={css.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className={css.error}>{formik.errors.email}</div>
          )}
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className={css.field}>
        <legend className={css.label}>
          {t("contactForm.fields.classFormat")}
        </legend>
        <div className={css.radioContainer}>
          <label className={css.radioLabel}>
            <input
              type="radio"
              name="classFormat"
              value="individual"
              onChange={formik.handleChange}
              checked={formik.values.classFormat === "individual"}
            />
            {t("contactForm.options.individual")}
          </label>
          <label className={css.radioLabel}>
            <input
              type="radio"
              name="classFormat"
              value="group"
              onChange={formik.handleChange}
              checked={formik.values.classFormat === "group"}
            />
            {t("contactForm.options.group")}
          </label>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className={css.field}>
        <label htmlFor="classType" className={css.label}>
          {t("contactForm.fields.classType")}
        </label>
        <select
          name="classType"
          className={css.input}
          onChange={formik.handleChange}
          value={formik.values.classType}
        >
          <option value="kids">{t("contactForm.options.kids")}</option>
          <option value="teens-adults">
            {t("contactForm.options.teensAdults")}
          </option>
          <option value="exam">{t("contactForm.options.exam")}</option>
          <option value="business">{t("contactForm.options.business")}</option>
          <option value="specialized">
            {t("contactForm.options.specialized")}
          </option>
        </select>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className={css.field}>
        <label htmlFor="message" className={css.label}>
          {t("contactForm.fields.message")}
        </label>
        <textarea
          name="message"
          placeholder={t("contactForm.placeholders.message")}
          className={css.input}
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
      </div>
      <button
        type="submit"
        className={css.btn}
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {t("contactForm.button")}
      </button>
    </form>
  );
}
