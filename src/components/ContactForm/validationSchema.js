import * as Yup from "yup";

export const createValidationSchema = (t) =>
  Yup.object({
    name: Yup.string()
      .min(2, t("validation.nameTooShort"))
      .max(50, t("validation.nameTooLong"))
      .required(t("validation.nameRequired")),
    phone: Yup.string()
      .matches(
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
        t("validation.phoneInvalid")
      )
      .required(t("validation.phoneRequired")),
    email: Yup.string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    message: Yup.string().min(5, t("validation.messageMin")).notRequired(),
  });
