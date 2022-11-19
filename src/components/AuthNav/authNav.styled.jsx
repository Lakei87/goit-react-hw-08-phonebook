import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
`;

export const Link = styled(NavLink)`
    &:not(:last-child){
        margin-right: 20px;
    }
`;