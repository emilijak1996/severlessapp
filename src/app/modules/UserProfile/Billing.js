/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import * as auth from "../Auth";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { InvoiceTable } from "./components/InvoiceTable";

function Billing(props) {
  // Fields
  const [loading, setloading] = useState(false);
  // const [isError, setisError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  useEffect(() => {}, [user]);
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    // setisError(false);
    const updatedUser = Object.assign(user, {
      password: values.password,
    });
    // user for update preparation
    dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
      // setisError(true);
      // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    currentPassword: "",
    password: "",
    cPassword: "",
  };
  const Schema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    password: Yup.string().required("New Password is required"),
    cPassword: Yup.string()
      .required("Password confirmation is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      }),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveUser(values, setStatus, setSubmitting);
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    },
  });

  const [tabIndex, setTabIndex] = useState(1);

  const handleChange = (value, event) => {
    setTabIndex(value);
  }

  return (
    <form className="card card-custom" onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Billing
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Change your Billing
          </span>
        </div>
        <div className="card-toolbar">
          <ToggleButtonGroup
            type="radio"
            name="radio"
            value={{value:tabIndex}}
            onChange={handleChange}
          >
            <ToggleButton variant={tabIndex === 1 ? "success" : "outline-success"} type="radio" name="radio" value={1}>Overview</ToggleButton>
            <ToggleButton variant={tabIndex === 2 ? "success" : "outline-success"} type="radio" name="radio" value={2}>Invoice</ToggleButton>
            <ToggleButton variant={tabIndex === 3 ? "success" : "outline-success"} type="radio" name="radio" value={3}>History</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        <div className="card-body">
          {tabIndex === 1 &&
          <div className="d-flex justify-content-between pt-6">
            <div className="d-flex flex-column flex-root">
              <span className="opacity-70 mb-3">Current Plan</span>
              <h1 className="font-weight-boldest mb-6">Pro</h1>
              <a
                className="text-primary"
                // onClick={}
              >
                Change Plan
              </a>
            </div>
            <div className="d-flex flex-column flex-root">
              <span className="opacity-70 mb-3">period</span>
              <h1 className="font-weight-boldest mb-6">Yearly</h1>
            </div>

            <div className="d-flex flex-column flex-root border-left pl-6">
              <span className="opacity-70 mb-3">Renewal amount</span>
              <h1 className="font-weight-boldest mb-6">$4620</h1>
              <span className="font-weight-bolder mb-2">23 Nov, 2021</span>
            </div>
          </div>}
          {tabIndex === 2 && <InvoiceTable />}
          {tabIndex === 3 && <></>}
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(Billing);
