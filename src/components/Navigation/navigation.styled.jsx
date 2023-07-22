import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import HomeIcon from '@mui/icons-material/Home';

export const Link = styled(NavLink)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    transition: 'color 0.3s ease-in-out',

    '&:hover': {
        color: theme.palette.common.white,
    }
}));

export const Logo = styled('p')(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up('768')]: {
        display: "block",
        fontSize: "30px",
        fontWeight: 500,
    },
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