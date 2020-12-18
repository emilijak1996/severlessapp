/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";

export function InvoiceTable() {
    const invoices = [
        {
            date: "Dec 13 2020",
            transaction: "trans1",
            amount: 230,
            payment: "Deposit"
        },
        {
            date: "Dec 1 2020",
            transaction: "trans3",
            amount: 23,
            payment: "Deposit"
        },
        {
            date: "Nov 13 2020",
            transaction: "trans2",
            amount: 2,
            payment: "Deposit"
        }
    ]
  return (
    <>
        {/* begin::Table */}
        <div className="table-responsive">
            <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
            <thead>
                <tr className="text-left">
                <th style={{ minWidth: "120px" }}>Date</th>
                <th style={{ minWidth: "100px" }}>Transaction</th>
                <th style={{ minWidth: "100px" }}>Amount</th>
                <th style={{ minWidth: "100px" }}>Payment Method</th>
                <th style={{ minWidth: "100px" }} />
                </tr>
            </thead>
            <tbody>
                {invoices.map((invoice, index) => {
                    return(<tr key={index} >
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {invoice.date}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {invoice.transaction}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {invoice.amount}
                            </span>
                        </td>
                        <td>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {invoice.payment}
                            </span>
                        </td>
                        <td className="pr-0 text-right">
                            <Link
                                title="Edit customer"
                                className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                                to="/user-profile/invoice"
                            >
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                <SVG
                                    src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
                                />
                                </span>
                            </Link>
                            <a
                                title="Edit customer"
                                className="btn btn-icon btn-light btn-hover-success btn-sm mx-3"
                                // onClick={}
                            >
                                <span className="svg-icon svg-icon-md svg-icon-success">
                                <SVG
                                    src={toAbsoluteUrl("/media/svg/icons/Files/download.svg")}
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
