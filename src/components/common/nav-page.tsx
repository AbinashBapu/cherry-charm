"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, useTheme } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@/states/slices/theme-slice";
import { useRouter } from "next/navigation";
// import Link from "next/link";

function ResponsiveAppBar() {
  const selectedTheme = useSelector((state: any) => state.theme.selectedTheme);
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            color: "white",
            backgroundColor: `${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              ":hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => {
              router.replace("/");
            }}
          >
            Shine Savvy
          </Typography>

          <Button color="inherit">Login</Button>
          <IconButton
            sx={{ color: "white" }}
            onClick={() => dispatch(changeTheme())}
          >
            {selectedTheme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
