import React from "react";
import {useSubheader} from "../../_metronic/layout";
import UserSettings from "../modules/UserSettings/UserSettingsPage";
export default function UserSettingsPage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (<UserSettings />);
};
