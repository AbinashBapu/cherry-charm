"use client";
import ProductCard from "@/components/common/product-card";
import { Box, Grid, useTheme } from "@mui/material";

export default function AcessioriesPage() {
  const theme = useTheme();

  const itemData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      price: 200,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      price: 200,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      price: 200,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      price: 200,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      price: 200,
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      price: 290,
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      price: 240,
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      price: 20,
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      price: 10,
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      price: 150,
    },
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      price: 200,
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      price: 500,
    },
  ];
  return (
    <>
      <Grid container spacing={0.5}>
        {itemData.map((item) => (
          <Grid item xs={3} key={item.title}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <ProductCard
                imageUrl={item.img}
                title={item.title}
                price={item.price}
                productDetailUrl={`../product-details/${item.id}`}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
