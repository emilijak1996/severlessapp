/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export function AffiliateDashboard() {
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
        <div className="">
        
        </div>
        {/* end::Table */}
    </>
  );
}
