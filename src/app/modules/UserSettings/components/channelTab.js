/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export function ChannelTab() {
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
        <div className="table-responsive">
            <a href="#" className="btn btn-primary font-weight-bold mb-4">
                <span className="svg-icon">
                    <SVG
                        src={toAbsoluteUrl("/media/svg/icons/code/plus.svg")}
                    />
                </span> Add Store
            </a>
            <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
            <thead>
                <tr className="text-left">
                <th style={{ minWidth: "120px" }}>Store Name</th>
                <th style={{ minWidth: "100px" }}>Store URL</th>
                <th style={{ minWidth: "100px" }}>Channel Type</th>
                <th style={{ minWidth: "100px" }}>Currency</th>
                <th style={{ minWidth: "100px" }}>Status</th>
                <th style={{ minWidth: "100px" }} />
                </tr>
            </thead>
            <tbody>
                {channels.map((Channel, index) => {
                    return(<tr key={index} >
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {Channel.storeName}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {Channel.storeUrl}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {Channel.channelType}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {Channel.currency}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {Channel.status}
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
                                title="Edit customer"
                                className="btn btn-icon btn-light btn-hover-success btn-sm mx-1"
                                // onClick={}
                            >
                                <span className="svg-icon svg-icon-md svg-icon-success">
                                <SVG
                                    src={toAbsoluteUrl("/media/svg/icons/general/update.svg")}
                                />
                                </span>
                            </a>
                            <a
                                title="Edit customer"
                                className="btn btn-icon btn-light btn-hover-danger btn-sm mx-1"
                                // onClick={}
                            >
                                <span className="svg-icon svg-icon-md svg-icon-danger">
                                <SVG
                                    src={toAbsoluteUrl("/media/svg/icons/general/trash.svg")}
                                />
                                </span>
                            </a>
                        </td>
                    </tr>)
                })}
            </tbody>
            </table>
        </div>
        {/* end::Table */}
    </>
  );
}
