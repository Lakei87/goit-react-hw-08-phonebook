import styled from "styled-components";

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 50px;
    }
    @media (min-width: 1280px) {
        font-size: 60px;
    }
`;

export const Icon = styled.img`
    width: 120px;
    height: 120px;

    @media (min-width: 768px) {
        width: 150px;
        height: 150px;
    }
    @media (min-width: 1280px) {
        width: 180px;
        height: 180px;
    }
`