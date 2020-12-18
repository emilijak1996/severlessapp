/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

function InvoicePage() {
  return (
    <>
        {/* <div className="container"> */}
            {/* <!-- begin::Card--> */}
            <div className="card card-custom overflow-hidden">
                <div className="card-body p-0">
                    {/* <!-- begin: Invoice--> */}
                    {/* <!-- begin: Invoice header--> */}
                    <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
                        <div className="col-md-9">
                            <div className="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                                <h1 className="display-4 font-weight-boldest mb-10">INVOICE</h1>
                                <div className="d-flex flex-column align-items-md-end px-0">
                                    {/* <!--begin::Logo--> */}
                                    <a href="#" className="mb-5">
                                        <img src={toAbsoluteUrl('/media/logos/logo-1.png')} alt="" />
                                    </a>
                                    {/* <!--end::Logo--> */}
                                    <span className="d-flex flex-column align-items-md-end opacity-70">
                                        <span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>
                                        <span>Mississippi 96522</span>
                                    </span>
                                </div>
                            </div>
                            <div className="border-bottom w-100"></div>
                            <div className="d-flex justify-content-between pt-6">
                                <div className="d-flex flex-column flex-root">
                                    <span className="font-weight-bolder mb-2">DATA</span>
                                    <span className="opacity-70">Dec 12, 2017</span>
                                </div>
                                <div className="d-flex flex-column flex-root">
                                    <span className="font-weight-bolder mb-2">INVOICE NO.</span>
                                    <span className="opacity-70">GS 000014</span>
                                </div>
                                <div className="d-flex flex-column flex-root">
                                    <span className="font-weight-bolder mb-2">INVOICE TO.</span>
                                    <span className="opacity-70">Iris Watson, P.O. Box 283 8562 Fusce RD.
                                    <br />Fredrick Nebraska 20620</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end: Invoice header--> */}
                    {/* <!-- begin: Invoice body--> */}
                    <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                        <div className="col-md-9">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="pl-0 font-weight-bold text-muted text-uppercase">Description</th>
                                            <th className="text-right font-weight-bold text-muted text-uppercase">Hours</th>
                                            <th className="text-right font-weight-bold text-muted text-uppercase">Rate</th>
                                            <th className="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="font-weight-boldest font-size-lg">
                                            <td className="pl-0 pt-7">Creative Design</td>
                                            <td className="text-right pt-7">80</td>
                                            <td className="text-right pt-7">$40.00</td>
                                            <td className="text-danger pr-0 pt-7 text-right">$3200.00</td>
                                        </tr>
                                        <tr className="font-weight-boldest border-bottom-0 font-size-lg">
                                            <td className="border-top-0 pl-0 py-4">Front-End Development</td>
                                            <td className="border-top-0 text-right py-4">120</td>
                                            <td className="border-top-0 text-right py-4">$40.00</td>
                                            <td className="text-danger border-top-0 pr-0 py-4 text-right">$4800.00</td>
                                        </tr>
                                        <tr className="font-weight-boldest border-bottom-0 font-size-lg">
                                            <td className="border-top-0 pl-0 py-4">Back-End Development</td>
                                            <td className="border-top-0 text-right py-4">210</td>
                                            <td className="border-top-0 text-right py-4">$60.00</td>
                                            <td className="text-danger border-top-0 pr-0 py-4 text-right">$12600.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end: Invoice body--> */}
                    {/* <!-- begin: Invoice footer--> */}
                    <div className="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0">
                        <div className="col-md-9">
                            <div className="d-flex justify-content-between flex-column flex-md-row font-size-lg">
                                <div className="d-flex flex-column mb-10 mb-md-0">
                                    <div className="font-weight-bolder font-size-lg mb-3">BANK TRANSFER</div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="mr-15 font-weight-bold">Account Name:</span>
                                        <span className="text-right">Barclays UK</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="mr-15 font-weight-bold">Account Number:</span>
                                        <span className="text-right">1234567890934</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="mr-15 font-weight-bold">Code:</span>
                                        <span className="text-right">BARC0032UK</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-md-right">
                                    <span className="font-size-lg font-weight-bolder mb-1">TOTAL AMOUNT</span>
                                    <span className="font-size-h2 font-weight-boldest text-danger mb-1">$20.600.00</span>
                                    <span>Taxes Included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end: Invoice footer--> */}
                    {/* <!-- begin: Invoice action--> */}
                    <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                        <div className="col-md-9">
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-light-primary font-weight-bold" onClick={() => window.print()}>Download Invoice</button>
                                <button type="button" className="btn btn-primary font-weight-bold" onClick={ () => window.print()}>Print Invoice</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end: Invoice action--> */}
                    {/* <!-- end: Invoice--> */}
                </div>
            </div>
            {/* <!-- end::Card--> */}
        {/* </div> */}
    </>
  );
}

export default InvoicePage;