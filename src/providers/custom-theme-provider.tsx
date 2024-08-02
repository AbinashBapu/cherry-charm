import darkThemeOptions from "@/theme/dark-theme";
import lightThemeOptions from "@/theme/light-theme";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CustomThemeContext = createContext<any>({ ...darkThemeOptions });
export default function CustomThemeProvider({ children }: { children: any }) {
  const selectedTheme = useSelector((state: any) => state.theme.selectedTheme);

  const [themeOptions, setThemeOptions] = useState<any>({
    ...lightThemeOptions,
  });

  useEffect(() => {
    selectedTheme === "light"
      ? setThemeOptions({ ...lightThemeOptions })
      : setThemeOptions({ ...darkThemeOptions });
  }, [selectedTheme]);

  const theme = createTheme({ ...themeOptions });

  return (
    <CustomThemeContext.Provider value={themeOptions}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
