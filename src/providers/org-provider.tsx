"use client";

import { Provider } from "react-redux";
import CustomThemeProvider from "./custom-theme-provider";
import appStore from "@/states/app-store";

export default function OrgProvider({ children }: { children: any }) {
  return (
    <Provider store={appStore}>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </Provider>
  );
}
