import React from "react";
import "./lecture1.css";
import { useFormik } from "formik";

export default function Lecture1() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log("Form State is", values);
  };
  const validate = (values) => {
    //expects erros object if contains any fields should be errors.name, errrors.email, error.channel
    const errors = {};
    if (!values.name) {
      errors.name = "Name field is required";
    }
    if (!values.email) {
      errors.email = "Email field is required";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid Email ";
    }
    if (!values.channel) {
      errors.channel = "Channel field is required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //   console.log("FORM VALUES", formik.values);
  return (
    <div>
      <h2>YouTube Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-danger">{formik.errors.name}</p>
        )}
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-danger">{formik.errors.email}</p>
        )}
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel && (
          <p className="text-danger">{formik.errors.channel}</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
