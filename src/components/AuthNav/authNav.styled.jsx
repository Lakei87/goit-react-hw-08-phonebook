import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled('nav')`
    display: flex;
    align-items: center;
    
`;

export const Link = styled(NavLink)`
    &:not(:last-child){
        margin-right: 20px;
    }
`;

export const LinkText = styled(Button)(({ theme }) => ({
    color: "#000",
    background: "#dbd9d9",
    width: "95px",
    '&:hover': {
        background: "#fff"
    },
    [theme.breakpoints.up('768')]: {
        width: "115px",
        fontSize: "16px"
    }
}))