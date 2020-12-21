import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import * as auth from "../Auth";
import { Switch, Divider, RadioGroup, FormControlLabel, Radio, Select, FormControl, InputLabel, Grid, TextField, Checkbox, Paper, Card } from "@material-ui/core";

function Notifications(props) {
  // Fields
  console.log("hello", props);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const setting = {};
  // UI Helpers
  const initialValues = {
    productNoLonger: "Do Nothing",
    productNotify: true,
    variantNoLonger: "Do Nothing",
    variantNotify: true,
    costChange: "Do Nothing",
    costNotify: true,
    inventoryChange: "Do Nothing",
    inventoryNotify: true,
    orderCancel: true,
    shippingDelay: true,
    delay: 100,
    emailNotify: true,
    pushNotify: true,
    highlight: true,
  };
  const Schema = Yup.object().shape({
    productNoLonger: Yup.string(),
    productNotify: Yup.bool(),
    variantNoLonger: Yup.string(),
    variantNotify: Yup.bool(),
    costChange: Yup.string(),
    costNotify: Yup.bool(),
    inventoryChange: Yup.string(),
    inventoryNotify: Yup.bool(),
    orderCancel: Yup.bool(),
    shippingDelay: Yup.bool(),
    delay: Yup.number(),
    emailNotify: Yup.bool(),
    pushNotify: Yup.bool(),
    highlight: Yup.bool(),
  });
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const saveSettings = (values, setStatus, setSubmitting) => {
    setloading(true);
    const updatedSettings = Object.assign(setting, values);
    console.log("this is updated", updatedSettings);
    // user for update preparation
    // dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
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
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      saveSettings(values, setStatus, setSubmitting);
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    },
  });
  console.log(formik.getFieldProps("syncOrderFrom"));
  console.log(formik.getFieldProps("syncOrderTo"));
  return (
    <form
      className="card card-custom card-stretch"
      onSubmit={formik.handleSubmit}
    >
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Notifications
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Manage your notification settings
          </span>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form"> 
        {/* begin::Body */}
        <div className="card-body">
         
          <div className="form-group row">
            <div className="col-lg-12 col-xl-12">
              <h5 className="font-weight-bolder">When product is no longer available</h5>
              <span className="form-text font-size-sm">
                Choose an action when one of your products is no longer available from supplier. Applies to all existing products.
              </span>
            </div>
            <div className="col-lg-12 col-xl-12">
              <RadioGroup
                value = {formik.values.autoFulDelay === 0 ? 0 : 1}
                onChange={(event, value) => formik.setFieldValue("autoFulDelay", Number(value))}
                // value={value} onChange={handleChange}
              >
                <FormControlLabel value="Do Nothing" control={<Radio />} label="Do Nothing" />
                <FormControlLabel value="Unpublish Product" control={<Radio />} label="Unpublish Product" />
                <FormControlLabel value="Set Quantity To Zero" control={<Radio />} label="Set Quantity To Zero" />
              </RadioGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={true} value="productNoLonger" />
                }
                label="Notify Me"
              />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-12 col-xl-12">
              <h5 className="font-weight-bolder">When variant is no longer available</h5>
              <span className="form-text font-size-sm">
                Choose an action when one of the product's variants is no longer available from supplier.
              </span>
            </div>
            <div className="col-lg-12 col-xl-12">
              <RadioGroup
                value = {formik.values.autoFulDelay === 0 ? 0 : 1}
                onChange={(event, value) => formik.setFieldValue("autoFulDelay", Number(value))}
                // value={value} onChange={handleChange}
              >
                <FormControlLabel value="Do Nothing" control={<Radio />} label="Do Nothing" />
                <FormControlLabel value="Remove Variant" control={<Radio />} label="Remove Variant" />
                <FormControlLabel value="Set Quantity To Zero" control={<Radio />} label="Set Quantity To Zero" />
              </RadioGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={true} value="productNoLonger" />
                }
                label="Notify Me"
              />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-12 col-xl-12">
              <h5 className="font-weight-bolder">When the cost changes</h5>
              <span className="form-text font-size-sm">
                Choose an action when the cost of your product changes.
              </span>
            </div>
            <div className="col-lg-12 col-xl-12">
              <RadioGroup
                value = {formik.values.autoFulDelay === 0 ? 0 : 1}
                onChange={(event, value) => formik.setFieldValue("autoFulDelay", Number(value))}
                // value={value} onChange={handleChange}
              >
                <FormControlLabel value="Do Nothing" control={<Radio />} label="Do Nothing" />
                <FormControlLabel value="Update Price and Compared At Price" control={<Radio />} label="Update Price and Compared At Price" />
                <FormControlLabel value="Update Price Only" control={<Radio />} label="Update Price Only" />
              </RadioGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={true} value="productNoLonger" />
                }
                label="Notify Me"
              />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-12 col-xl-12">
              <h5 className="font-weight-bolder">When inventory changes</h5>
              <span className="form-text font-size-sm">
                Choose an action when the inventory level of a particular product changes.
              </span>
            </div>
            <div className="col-lg-12 col-xl-12">
              <RadioGroup
                value = {formik.values.autoFulDelay === 0 ? 0 : 1}
                onChange={(event, value) => formik.setFieldValue("autoFulDelay", Number(value))}
                // value={value} onChange={handleChange}
              >
                <FormControlLabel value="Do Nothing" control={<Radio />} label="Do Nothing" />
                <FormControlLabel value="Update Automatically" control={<Radio />} label="Update Automatically" />
              </RadioGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={true} value="productNoLonger" />
                }
                label="Notify Me"
              />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-12 col-xl-12">
              <h5 className="font-weight-bolder">Order</h5>
              <span className="form-text font-size-sm">
                Get notification when orders are cancelled.
              </span>
            </div>
            <div className="col-lg-12 col-xl-12">
              <FormControlLabel
                control={
                  <Checkbox checked={true} value="productNoLonger" />
                }
                label="Notify Me"
              />
            </div>
            
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-12 col-xl-12">
              <h5 className="font-weight-bolder">Shipping Delay</h5>
              <Switch checked={formik.values.autoGenProduct} color="secondary" {...formik.getFieldProps("autoGenProduct")} />
              <span className="form-text font-size-sm">
                Enable notification(s) for delayed tracking number.
              </span>
            </div>
            <div className="col-lg-12 col-xl-12">
              <div className="card mt-6 p-6 col-lg-12 col-xl-12">
                <div className="flex">
                  <span className="mr-6">Notify if tracking number is not found after(in days)</span>
                  <TextField type="number" className="col-lg-3 col-xl-3"></TextField>
                </div>
                <Grid className="my-4" container>
                  <FormControlLabel
                    className="mr-6"
                    control={
                      <Checkbox checked={true} value="productNoLonger" />
                    }
                    label="Notify by Email"
                  />
                  <FormControlLabel
                    className="mr-6"
                    control={
                      <Checkbox checked={true} value="productNoLonger" />
                    }
                    label="Notify by Push Notification"
                  />
                  <FormControlLabel
                    className="mr-6"
                    control={
                      <Checkbox checked={true} value="productNoLonger" />
                    }
                    label="Highlight Orders on Tracking Page"
                  />
                </Grid>
              </div>
            </div>
            
          </div> 
          <Divider className="mb-12" />
        </div>
        {/* end::Body */}
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(Notifications);
