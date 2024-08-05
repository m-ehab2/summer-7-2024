import React, { useEffect, useRef, useState } from "react";
import { object, string } from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import useUser from "../Hooks/useUser";
import { useNavigate, useParams } from "react-router-dom";
const schema = object().shape({
  name: string()
    .required("Name is Required")
    .min(3, "Name must be more than three Characters")
    .matches("[a-zA-Z]", "Invalid Name, must contain letters only"),
  jobTitle: string()
    .required("Job title is Required")
    .matches("[a-zA-Z]", "Invalid Job Title, must contain letters only"),
});

export default function Edit() {
  const { id } = useParams();
  console.log({ id });
  const { fetchUser, updateUser } = useUser();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      setSubmitting(true);
      const res = await updateUser(id, e);
      console.log({ res });
      toast.success("Update Completed");
      navigate("/dashboard/users");
    } catch (error) {
      console.log({ error });
      toast.error("Failed to Update user");
    } finally {
      setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: { name: "", jobTitle: "" },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser(id);
      console.log({ user });
      formik.setValues({ jobTitle: user.jobTitle, name: user.name });
    };
    getUser();
  }, [id]);
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
          Update
        </button>
      </form>
    </div>
  );
}
