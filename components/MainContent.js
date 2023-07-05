import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import RecipeReviewCard from "./RecipeReviewCard";

export default function MainContent() {
  return (
    <>
      <Typography paragraph sx={{fontSize: '20px'}}>Choose a contest to begin your adventure</Typography>
      <Box sx={{ display: "flex", gap: "1.5rem", marginTop: "2.5rem" }}>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Box>
    </>
  );
}
