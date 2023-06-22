import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 400;
`;

export const Proposition = styled.p`
    margin-top: 20px;
`;

export const Link = styled(NavLink)`
    margin-left: 5px;
    color: #1976d2;
`;

export const SendMailAgain = styled.a`
    text-decoration: none;
    margin-left: 5px;
    color: #1976d2;
`