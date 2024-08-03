"use client";
import { Box, Button, Grid, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: "100%",
          backgroundColor: `${theme.palette.primary.light}`,
        }}
      ></Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            onClick={() => {
              router.push("/fashion/accessories");
            }}
          >
            Shop Now
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </>
  );
}
