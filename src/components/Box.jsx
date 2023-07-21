import { NavLink } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { color, typography, space } from 'styled-system';
import BgImg from '../images/black1920.png';


export const Box = styled('div')(
    color,
    typography,
    space,
);

export const Main = styled('main')`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${BgImg});
`;

export const Section = styled('section')`
    padding: 15px 0;
`;

export const Container = styled('div')`
    padding: 0 15px;
    text-align: center;
`;

export const Footer = styled('footer')`
    width: 100%;
    height: 30px;
    flex-shrink: 0;

    box-shadow: 0px -10px 16px -12px #fff;
`;


/**styles for register and login forms */
export const FormWrap = styled('form')`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & div{
        margin-bottom: 5px;
    }
`;

export const FormTitle = styled('h2')`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 400;

    @media (min-width: 1024px){
        font-size: 38px;
    };
`;

export const Field = styled(TextField)(({ theme }) => ({
    width: 250,
    '& label': {
      color: "inherit"  
    },
    '& .MuiInputBase-input': {
        color: "#fff"
    },
    '& label.Mui-focused': {
        color: "inherit"
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ffffffce',
        },
        '&:hover fieldset': {
            borderColor: '#ffffff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
    },

    [theme.breakpoints.up('1024')]: {
        width: 300
    }
}));

export const Btn = styled(Button)(({ theme }) => ({
    width: 250,
    [theme.breakpoints.up('1024')]: {
        width: 300,
    }
}));

export const Proposition = styled('p')`
    margin-top: 20px;
`;

export const Link = styled(NavLink)`
    margin-left: 5px;
    color: #1976d2;
    text-decoration: underline;
`;