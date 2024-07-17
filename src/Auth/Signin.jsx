import { FieldArray, Form, Formik } from "formik";
import * as yup from "yup";
import "./style.css";
import FavoriteField from "./FavoriteField";
import FormTemplate from "../FieldComponent/FormTemplate";

const initialValues = {
  name: "",
  email: "",
  password: "",
  address: {
    city: "",
    postalcode: "",
  },
  phone: ["", ""],
  favorite: [""],
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Please complete this";
//   }
//   if (!values.email) {
//     errors.email = "Please complete this";
//   } else {
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
//       errors.email = "Your email doesn't correct";
//     }
//   }
//   if (!values.password) {
//     errors.password = "Please complete this";
//   }
//   return errors;
// };
const validationSchema = yup.object({
  name: yup.string().required("Please complete this"),
  email: yup.string().required("please complete this").email("enter correctly"),
  password: yup
    .string()
    .required("please complete this")
    .min(6, "must be more than 6 parameter"),
  address: yup.object({
    city: yup.string().required("please complete this"),
    postalcode: yup.string().required("please complete this"),
  }),
  phone: yup
    .array()
    .of(yup.string().required("please complete this").min(4, "more than 4")),

  favorite: yup
    .array()
    .of(yup.string().required("please complete this").min(4, "more than 4")),
});

export default function Signin() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <div className="auth-page">
        <div className="auth-box">
          <Form>
            <h2 className="text-center title-Form mb-2">SIGN IN</h2>
            {/* Name */}
            <FormTemplate
              name="name"
              type="text"
              label="Name"
              control="input"
            />
            {/* email */}
            <FormTemplate
              name="email"
              type="email"
              label="E-mail"
              control="input"
            />
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <FastField
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
              />
              <ErrorMessage name="email">
                {(error) => {
                  return (
                    <small className="d-block text-danger ">{error}</small>
                  );
                }}
              </ErrorMessage>
            </div> */}
            {/* password */}
            <FormTemplate
              name="password"
              type="password"
              label="Password"
              control="input"
            />
            {/* <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <FastField name="password">
                {({ field, meta }) => {
                  return (
                    <>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <span className="text-danger text-center d-block ">
                          {meta.error}
                        </span>
                      ) : null}
                    </>
                  );
                }}
              </FastField>
            </div> */}
            {/* city */}
            <FormTemplate
              name="address.city"
              type="text"
              label="City"
              control="input"
            />
            {/* <div className="my-2 ">
              <label htmlFor="exampleInputCity" className="form-label">
                City
              </label>
              <FastField
                type="text"
                className="form-control"
                id="exampleInputCity"
                name="address.city"
                aria-describedby="cityHelp"
              />
              <ErrorMessage name="address.city">
                {(error) => {
                  return (
                    <small className="d-block text-danger ">{error}</small>
                  );
                }}
              </ErrorMessage>
            </div> */}
            {/* postal code */}
            <FormTemplate
              name="address.postalcode"
              type="text"
              label="Postal code"
              control="input"
            />
            {/* <div className="my-2 ">
              <label htmlFor="exampleInputPostalCode" className="form-label">
                Postal code
              </label>
              <FastField
                type="text"
                className="form-control"
                id="exampleInputPostalCode"
                name="address.postalcode"
                aria-describedby="PostalCodeHelp"
              />
              <ErrorMessage name="address.postalcode">
                {(error) => {
                  return (
                    <small className="d-block text-danger ">{error}</small>
                  );
                }}
              </ErrorMessage>
            </div> */}
            {/* Mobile*/}
            <FormTemplate
              name="phone[0]"
              type="text"
              label="Mobile"
              control="input"
            />
            {/* <div className="my-2 ">
              <label htmlFor="exampleInputMobile" className="form-label">
                Mobile
              </label>
              <FastField
                type="text"
                className="form-control"
                id="exampleInputMobile"
                name="phone[0]"
                aria-describedby="mobileHelp"
              />
              <ErrorMessage name="phone[0]">
                {(error) => {
                  return (
                    <small className="d-block text-danger ">{error}</small>
                  );
                }}
              </ErrorMessage>
            </div> */}
            {/* telephone*/}
            <FormTemplate
              name="phone[1]"
              type="text"
              label="TelePhone"
              control="input"
            />
            {/*<div className="my-2 ">
              <label htmlFor="exampleInputTelePhone" className="form-label">
                TelePhone
              </label>
              <FastField
                type="text"
                className="form-control"
                id="exampleInputTelephone"
                name="phone[1]"
                aria-describedby="telephoneCodeHelp"
              />
              <ErrorMessage name="phone[1]">
                {(error) => {
                  return (
                    <small className="d-block text-danger ">{error}</small>
                  );
                }}
              </ErrorMessage>
            </div> */}
            {/* favorite */}
            <div className="my-2">
              <FieldArray type="text" className="form-control" name="favorite">
                {(props) => <FavoriteField {...props} />}
              </FieldArray>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-outline-danger ">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
