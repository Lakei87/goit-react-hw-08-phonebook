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
    height: 100vh;
    align-items: center;
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