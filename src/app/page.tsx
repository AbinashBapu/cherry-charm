"use client";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          height: "400px",
          width: "100%",
          backgroundColor: `${theme.palette.primary.main}`,
        }}
      >
        <Box sx={{ p: 15 }}>
          <Typography sx={{ color: "white", fontStyle: "italic" }} variant="h5">
            Elevate Your Style:
          </Typography>
          <Typography sx={{ color: "white", fontStyle: "italic" }} variant="h5">
            Discover Trendsetting Fashion Accessories
          </Typography>

          <Button
            sx={{ mt: 4 }}
            variant="contained"
            color="info"
            onClick={() => {
              router.push("/fashion/accessories");
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </>
  );
}
