"use client";

import {
  Box,
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <img
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="Casual Cross body messanger Bag for Women"
          style={{ height: "350px" }}
        />
      </Box>
      <Box mx={5}>
        <Typography variant="h5">
          Casual Cross body messanger Bag for Women
        </Typography>
        <Rating
          name="half-rating"
          defaultValue={4.5}
          precision={0.5}
          color="red"
        />
        <Typography
          variant="h5"
          color={`${theme.palette.success.main}`}
          sx={{ fontWeight: "bold", mt: 2, backgroundColor: "#80808033", p: 1 }}
        >
          Rs. 500.00
        </Typography>
        <Box sx={{ mt: 2 }}>
          {["#ff0000ad", "#13b913c4", "#252582", "#eded1096"].map(
            (varriant: any) => (
              <Fab
                size="small"
                aria-label="add"
                sx={{ backgroundColor: `${varriant}`, margin: 1 }}
              ></Fab>
            )
          )}
        </Box>

        <Box sx={{ marginTop: 7 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Quanity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={0}
              label="Quantity"
              size="small"
            >
              <MenuItem value={0}>Select Number Of Items</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            sx={{ width: "49%" }}
            startIcon={<AddShoppingCartIcon />}
          >
            Add To Cart
          </Button>
          <Button variant="contained" sx={{ width: "49%" }}>
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
