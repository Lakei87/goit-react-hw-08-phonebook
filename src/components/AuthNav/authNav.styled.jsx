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

export const LinkText = styled(Button)(({theme}) => ({
    width: "95px",
    [theme.breakpoints.up('768')]: {
        width: "115px",
        fontSize: "16px"
    }
}))