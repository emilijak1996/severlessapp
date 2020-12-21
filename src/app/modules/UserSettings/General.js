import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import * as auth from "../Auth";
import { Switch, Divider, RadioGroup, FormControlLabel, Radio, Select, FormControl, InputLabel, Grid, TextField } from "@material-ui/core";

function General(props) {
  // Fields
  console.log("hello", props);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const setting = {};
  // UI Helpers
  const initialValues = {
    syncAliOrderNumber: true,
    syncShopifyOrderNotes: false,
    reqFulCancel: true,
    autoGenProduct: false,
    autoFulDelay: 0,
    syncOrderFrom: "",
    syncOrderTo: "",
  };
  const Schema = Yup.object().shape({
    syncAliOrderNumber: Yup.bool(),
    syncShopifyOrderNotes: Yup.bool(),
    reqFulCancel: Yup.bool(),
    autoGenProduct: Yup.bool(),
    autoFulDelay: Yup.number(),
    syncOrderFrom: Yup.date().required("From field is required"),
    syncOrderTo: Yup.date().required("To field is required"),
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
            General
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Update your general settings
          </span>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form"> 
        {/* begin::Body */}
        <div className="card-body">
         
          <div className="form-group row">
            <div className="col-lg-10 col-xl-10">
              <h5 className="font-weight-bolder">Sync Aliexpress order number to Shopify additional details</h5>
              <span className="form-text font-size-sm">
                If this setting is on, your Ali order number will be auto synced to Shopify order detail page.
              </span>
            </div>
            <div className="col-xl-2 col-lg-2 col-form-label">
              <Switch checked={formik.values.syncAliOrderNumber} color="secondary" {...formik.getFieldProps("syncAliOrderNumber")}/>
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-10 col-xl-10">
              <h5 className="font-weight-bolder">Synchronize Shopify order notes</h5>
              <span className="form-text font-size-sm">
                Activate this feature to automatically synchronize Shopify order notes. DSers will help to send the notes of an order from Shopify to the AliExpress suppliers along with orders.
              </span>
            </div>
            <div className="col-xl-2 col-lg-2 col-form-label">
              <Switch checked={formik.values.syncShopifyOrderNotes} color="secondary" {...formik.getFieldProps("syncShopifyOrderNotes")} />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-10 col-xl-10">
              <h5 className="font-weight-bolder">Request Fulfillment Cancelation</h5>
              <span className="form-text font-size-sm">
                After activating this function, the orders that cannot be placed from DSers because you clicked "Request Fulfillment" on Shopify will be restored so you can place them normally to AliExpress.
              </span>
            </div>
            <div className="col-xl-2 col-lg-2 col-form-label">
              <Switch checked={formik.values.reqFulCancel} color="secondary" {...formik.getFieldProps("reqFulCancel")} />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-10 col-xl-10">
              <h5 className="font-weight-bolder">Another separate product will be generated when product variant is more than 100</h5>
              <span className="form-text font-size-sm">
                The product will be automatically divided into 2 or more when add up to over 100 variants to one product in Shopify store. Shopify restrict a maximum of 100 variants of one product, this function will automatically help you to identify products which variant is more than 100 from Alie, besides, the extra variants will be generated a new product URL. For example: If a product has 120 variants then 100 variants are one product URL and the remaining 20 variants are another product URL.
              </span>
            </div>
            <div className="col-xl-2 col-lg-2 col-form-label">
              <Switch checked={formik.values.autoGenProduct} color="secondary" {...formik.getFieldProps("autoGenProduct")} />
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-10 col-xl-10">
              <h5 className="font-weight-bolder">Auto Fulfill Delay</h5>
              <span className="form-text font-size-sm">
                When the purchase order is shipped from the supplier.
              </span>
              <RadioGroup
                value = {formik.values.autoFulDelay === 0 ? 0 : 1}
                onChange={(event, value) => formik.setFieldValue("autoFulDelay", Number(value))}
                // value={value} onChange={handleChange}
              >
                <FormControlLabel value={0} control={<Radio />} label="Fulfill order and upload tracking number immediately" />
                <FormControlLabel value={1} control={<Radio />} label={<div>Fulfill order and upload tracking number after<Select
                  native
                  disabled={!formik.values.autoFulDelay}
                  className="mx-3"
                  // style={{position:"absolute", bottom:0}}
                  value={formik.values.autoFulDelay}
                  onChange={(e) => formik.setFieldValue("autoFulDelay", Number(e.target.value))}
                  inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                  }}
                >
                  <option value={1}>1hour</option>
                  <option value={6}>6hours</option>
                  <option value={12}>12hours</option>
                </Select></div>} />
              </RadioGroup>
            </div>
          </div> 
          <Divider className="mb-12" />
          <div className="form-group row">
            <div className="col-lg-10 col-xl-10">
              <h5 className="font-weight-bolder">Synchronize Shopify order</h5>
              <span className="form-text font-size-sm mute-text">
                DSers will sync orders from the last 7 days by default. Choose a date range to sync more orders you wnat. You can sync up to 30 days per time.
              </span>
              <Grid className="my-4" container>
                <TextField
                  label="From"
                  type="date"
                  className="mr-12"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...formik.getFieldProps("syncOrderFrom")}
                />
                <TextField
                  label="To"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...formik.getFieldProps("syncOrderTo")}
                />
              </Grid>
            </div>
          </div> 
        </div>
        {/* end::Body */}
      </div>
      {/* end::Form */}
    </form>
  );
}

export default connect(null, auth.actions)(General);
