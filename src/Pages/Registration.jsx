import React, { useRef, useState } from "react";
import { object, string } from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import useUser from "../Hooks/useUser";
import { useParams } from "react-router-dom";
const schema = object().shape({
  name: string()
    .required("Name is Required")
    .min(3, "Name must be more than three Characters")
    .matches("[a-zA-Z]", "Invalid Name, must contain letters only"),
  jobTitle: string()
    .required("Job title is Required")
    .matches("[a-zA-Z]", "Invalid Job Title, must contain letters only"),
});

export default function Registration() {
  const [submitting, setSubmitting] = useState(false);
  const { registerUser } = useUser();
  const handleSubmit = async (e) => {
    try {
      setSubmitting(true);
      // const res = await axios.post("http://localhost:3000/users", e);
      const res = await registerUser(e);
      console.log({ res });
      toast.success("Registration Completed");
    } catch (error) {
      console.log({ error });
      toast.error("Failed to Register user");
    } finally {
      setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: { name: "", jobTitle: "" },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User's Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-danger">{formik.errors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Job Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Job Title"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="jobTitle"
          />
          {formik.touched.jobTitle && formik.errors.jobTitle && (
            <p className="text-danger">{formik.errors.jobTitle}</p>
          )}
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${submitting && "disabled"}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
