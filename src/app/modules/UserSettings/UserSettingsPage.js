import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import General from "./General";
import { SettingsCard } from "./components/SettingsCard";
import Channels from "./Channels";
import StaffPermissions from "./StaffPermissions";
import Notifications from "./Notifications";
import Affiliate from "./Affiliate";

export default function UserSettingsPage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User Settings");
  return (
    <div className="d-flex flex-row">
      <SettingsCard></SettingsCard>
      <div className="flex-row-fluid ml-lg-8">
        <Switch>
          <Redirect
            from="/user-settings"
            exact={true}
            to="/user-settings/general"
          />
          <Route
            path="/user-settings/general"
            component={General}
          />
          <Route
            path="/user-settings/channels"
            component={Channels}
          />
          <Route
            path="/user-settings/permissions"
            component={StaffPermissions}
          />
          <Route
            path="/user-settings/notifications"
            component={Notifications}
          />
          <Route
            path="/user-settings/affiliate"
            component={Affiliate}
          />
          {/* <Route
            path="/user-settings/manage-supplies"
            component={}
          />
          <Route
            path="/user-settings/shipping"
            component={}
          />
          <Route
            path="/user-settings/tracking"
            component={}
          />
          
          <Route
            path="/user-settings/pricing-rule"
            component={}
          />
          
          <Route
            path="/user-settings/reporting"
            component={}
          />
           */}
        </Switch>
      </div>
    </div>
  );
}
