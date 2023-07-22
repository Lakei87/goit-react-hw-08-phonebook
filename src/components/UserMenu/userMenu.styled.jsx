import { styled } from "@mui/material/styles";
import { Button } from '@mui/material';

export const NavWrap = styled('nav')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('768')]: {
        flexGrow: 1,
        justifyContent: "inherit",
    }
    
}));

export const Greeting = styled('p')(({theme}) => ({
    fontSize: "18px",
    [theme.breakpoints.up('768')]: {
        marginRight: "40px",
    }
}));

export const BtnLogout = styled(Button)(() => ({
    color: "#000",
    background: "#dbd9d9",
    width: "95px",
    '&:hover': {
        background: "#fff"
    },
}));