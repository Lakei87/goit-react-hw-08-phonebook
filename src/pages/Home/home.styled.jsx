import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50%);   
    }
    50% {
        opacity: 0.4;
        transform: translateX(-25%);
    }
    100%{
        opacity: 0.8;
        transform: translateX(0);
    }
`;

const slideInFromRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(50%);   
    }
    50% {
        opacity: 0.4;
        transform: translateX(25%);
    }
    100%{
        opacity: 0.8;
        transform: translateX(0);
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    opacity: 0.8;
    animation: ${slideInFromRight} 0.8s linear;

    @media (min-width: 768px) {
        font-size: 50px;
    }
    @media (min-width: 1024px) {
        font-size: 60px;
    }
`;

export const Icon = styled.img`
    width: 120px;
    height: 120px;
    filter: drop-shadow(-2px 2px 4px white);
    opacity: 0.8;
    animation: ${slideInFromLeft} 0.8s linear;

    @media (min-width: 768px) {
        width: 150px;
        height: 150px;
    }
    @media (min-width: 1024px) {
        width: 180px;
        height: 180px;
    }
`;
