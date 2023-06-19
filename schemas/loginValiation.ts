import * as yup from "yup";
export const loginValidator = yup.object({
  email: yup
    .string()
    .email("Please enter valid emial address.")
    .required("Email is invalid"),
  password: yup.string().required("Password is invalid"),
});
