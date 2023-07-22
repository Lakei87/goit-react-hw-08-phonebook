import { styled } from "@mui/material/styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const FooterWrap = styled('footer')`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 50px;
    flex-shrink: 0;

    box-shadow: 0px -10px 16px -12px #fff;
`;

export const FollowMe = styled('div')`
    display: flex;
    align-items: center;
`;

export const Text = styled('p')`
    margin-right: 10px;
`;

export const Link = styled('a')`
    display: flex;
`;

export const Icon = styled(LinkedInIcon)`
    background-color: #dbd9d9;
    border-radius: 4px;
    fill: #1976d2;
    &:hover{
        background-color: #fff;
    }
`;

export const Signature = styled('p')`
    
`;