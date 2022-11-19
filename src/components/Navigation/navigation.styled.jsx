import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;

    &.active{
        color: #292c1d76;
    }
`;

export const Logo = styled.p`
    font-size: 25px;
    font-weight: 500;
`;
