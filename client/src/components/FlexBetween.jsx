import { Box } from "@mui/material";
import { styled } from "@mui/material";

const FlexBetween = styledBox(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

export default FlexBetween;