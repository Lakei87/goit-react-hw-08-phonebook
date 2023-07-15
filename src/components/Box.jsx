import styled from 'styled-components';
import { color, typography, space } from 'styled-system';

export const Box = styled('div')(
    color,
    typography,
    space,
);

export const MainWrap = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
    height: 100vh;
    align-items: center;
    background-image: linear-gradient(to right top, #dddddd, #dadadf, #d6d7e1, #d1d4e4, #cbd2e6, #c6d2ea, #bfd2ee, #b7d3f2, #acd6f8, #9fdafc, #90defe, #80e2fe);
`;

export const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    width: 370px;
    text-align: center;

    & div{
        margin-bottom: 5px;
    }
`;