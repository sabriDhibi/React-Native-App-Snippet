import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { RootNavigator } from "./src/Routes";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />

      <RootNavigator />
    </React.Fragment>
  );
}
