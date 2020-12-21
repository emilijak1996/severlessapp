/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import SVG from "react-inlinesvg";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import * as auth from "../Auth";

function StaffPermissions(props) {
  // Fields
  const [loading, setloading] = useState(false);
  const [isError, setisError] = useState(false);
  const dispatch = useDispatch();
  const users=[
    {
      fullName:"hey hey",
      email:"hey@gmail.com",
      accessLevel:"admin",
      store:"store",
      status:"pending"      
    },
    {
      fullName:"hey hey",
      email:"hey@gmail.com",
      accessLevel:"admin",
      store:"store",
      status:"enabled"      
    },
    {
      fullName:"hey hey",
      email:"hey@gmail.com",
      accessLevel:"admin",
      store:"store",
      status:"disabled"      
    }
  ];
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

  return (
    <form className="card card-custom" onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Staff Permissions
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Change your staff permission settings
          </span>
        </div>
        
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        <div className="card-body">
          <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
            <thead>
                <tr className="text-left">
                <th style={{ minWidth: "120px" }}>Full Name</th>
                <th style={{ minWidth: "100px" }}>Email</th>
                <th style={{ minWidth: "100px" }}>Access Level</th>
                <th style={{ minWidth: "100px" }}>Store(s)</th>
                <th style={{ minWidth: "100px" }}>Status</th>
                <th style={{ minWidth: "100px" }} />
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return(<tr key={index} >
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {user.fullName}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {user.email}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {user.accessLevel}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {user.store}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {user.status}
                            </span>
                        </td>
                        <td className="pr-0 text-right">
                            <a
                                title="Edit customer"
                                className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1"
                                // onClick={}
                            >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                <SVG
                                    src={toAbsoluteUrl("/media/svg/icons/General/edit.svg")}
                                />
                                </span>
                            </a>
                            <a
                                title={user.status === "enabled" ? "Disable" : "Enable"}
                                className={`btn btn-icon btn-light ${user.status === "enabled" ? "btn-hover-danger" : "btn-hover-success"} btn-sm mx-1`}
                                // onClick={}
                            >
                                <span className={`svg-icon svg-icon-md ${user.status === "enabled" ? "svg-icon-danger" : "svg-icon-success"}`}>
                                <SVG
                                    src={user.status === "enabled" ? toAbsoluteUrl("/media/svg/icons/navigation/close.svg") : toAbsoluteUrl("/media/svg/icons/navigation/check.svg")}
                                />
                                </span>
                            </a>
                        </td>
                    </tr>)
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(StaffPermissions);
