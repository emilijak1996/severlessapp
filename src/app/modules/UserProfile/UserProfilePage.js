import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import Billing from "./Billing";
import { ProfileCard } from "./components/ProfileCard";
import InvoicePage from "./components/InvoicePage";

export default function UserProfilePage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");
  return (
    <div className="d-flex flex-row">
      <ProfileCard></ProfileCard>
      <div className="flex-row-fluid ml-lg-8">
        <Switch>
          <Redirect
            from="/user-profile"
            exact={true}
            to="/user-profile/personal-information"
          />
          <Route
            path="/user-profile/account-information"
            component={AccountInformation}
          />
          <Route
            path="/user-profile/change-password"
            component={ChangePassword}
          />
          <Route
            path="/user-profile/billing"
            component={Billing}
          />
          <Route
            path="/user-profile/personal-information"
            component={PersonaInformation}
          />
          <Route
            path="/user-profile/invoice"
            component={InvoicePage}
          />
        </Switch>
      </div>
    </div>
  );
}
