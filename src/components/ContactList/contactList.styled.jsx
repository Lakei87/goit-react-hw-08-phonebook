import { styled } from "@mui/material/styles";

export const List = styled('ul')(({ theme }) => ({
    [theme.breakpoints.down('768')]: {
        width: "250px",
    }
}));