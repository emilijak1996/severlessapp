/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from "@material-ui/core";

export function AffiliateSettings() {
    const channels = [
        {
            storeName: "store",
            storeUrl: "www.store.com",
            channelType: "Shopify",
            currency: "Deposit",
            status:"pending"
        },
        {
            storeName: "store",
            storeUrl: "www.store.com",
            channelType: "Shopify",
            currency: "Deposit",
            status:"scheduled"
        },
        {
            storeName: "store",
            storeUrl: "www.store.com",
            channelType: "Shopify",
            currency: "Deposit",
            status:"canceled"
        },
    ]
  return (
    <>
        {/* begin::Table */}
        <div className="row">
            <h5 className="font-weight-bolder">Your Referral Link</h5>
            <FormControl>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                id="adornment-password"
                // value={values.password}
                // onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton 
                        aria-label="Toggle password visibility" 
                        // onClick={handleClickShowPassword}
                    >
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/general/clipboard.svg"
                          )}
                        ></SVG>{" "}
                    </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>
        </div>
        {/* end::Table */}
    </>
  );
}
