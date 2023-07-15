import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #1976d2;
    text-decoration: none;

    &:hover{
        color: #1565c0;
    }
`;

export const Logo = styled('p')((props) => ({
    fontSize: "50px",
    fontWeight: 500,
}));

export const LogoText = styled('p')(({ theme }) => ({
    fontSize: "30px",
    [theme.breakpoints.down('768')]: {
        display: "none",
    },
}));

export const LogoIcon = styled(HomeIcon)(() => ({
    fontSize: "40px",
}));