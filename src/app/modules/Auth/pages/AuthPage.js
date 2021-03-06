/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import "./auth.css"
export function AuthPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-sm-row flex-row-fluid bg-white"
          id="kt_login" style={{width:"500px!important"}}
        >
          
          {/*begin::Content*/}
          <div className="flex-row-fluid d-flex flex-column position-relative  overflow-hidden" id="auth_page">
            {/* begin::Content body */}
            <Link to="/" className="flex-column-auto mt-5" style={{width:"20%"}}>
              <img
                alt="Logo"
                className="max-h-70px"
                src={"/media/logos/logo-letter-1.png"} style={{visibility:"visible!important"}}
              />
            </Link>
            <div className="d-flex flex-column-fluid flex-center  mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/registration"
                  component={Registration}
                />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-75 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2020 Metronic
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}

          {/*begin::Aside*/}
          <div
            className="login-aside1"
            style={{ width:"50%!important",
              backgroundColor: "#364049"
              // backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`,
            }}
          >
            {/*begin: Aside Container*/}
            <div style={{padding:"20px",paddingBottom:"90px"}}>
              <img src="/media/logos/popsTitle.png" className="logos-auth-page"/>
              </div>
            <div className="d-flex flex-row-fluid flex-column justify-content-between">

              {/* start:: Aside content */}
             
              <div className="  justify-content-center">
                <div className="mb-5 text-white justify-content-center login_text_title" style={{paddingLeft:"60px",paddingRight:"60px"}} >
                  The Ultimate Dropshipping Solution!
                </div>
                <div className="font-weight-lighter text-white opacity-80 justify-content-center login_text_dec">
                  AliExpress Dropshipping Partner App
                </div>
                <div style={{textAlign:"center",paddingTop:"20%"}} >
                   <img src="/media/logos/auth-logo1.png" className="logos1-auth-page center justify-content-center" />
                </div>
                
              </div>
              {/* end:: Aside content */}

             
              {/* start:: Aside footer for desktop */}
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-80 font-weight-bold	text-black auth-login-text">
                  &copy; 2020 Metronic
                </div>
                <div className="d-flex text-black">
                  <Link to="/terms" className="text-black auth-login-text">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-black ml-10 auth-login-text">
                    Legal
                  </Link>
                  <Link to="/terms" className="text-black ml-10 auth-login-text">
                    Contact
                  </Link>
                </div>
              </div>
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
