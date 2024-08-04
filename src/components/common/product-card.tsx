import {
  Box,
  Button,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

type ProductShortDetails = {
  imageUrl: string;
  title: string;
  price: number;
  productDetailUrl: string;
};

export default function ProductCard({
  imageUrl,
  title,
  price,
  productDetailUrl,
}: ProductShortDetails) {
  const theme = useTheme();

  return (
    <Paper>
      <Box
        sx={{
          backgroundColor: "#f3f0f085",
          ":hover": {
            cursor: "pointer",
            padding: "2px",
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Tooltip title={"Get " + title + " @" + price}>
            <img
              src={`${imageUrl}`}
              style={{ height: "200px", width: "100%" }}
              alt={title}
            />
          </Tooltip>
        </Box>

        <Box padding={1}>
          <Typography variant="subtitle1">{title}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color={"primary"}>
              Rs. {price}
            </Typography>
            <Button variant="outlined" size="small" href={productDetailUrl}>
              View Details
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
