import { styled } from "@mui/material/styles";

export const SendMailAgain = styled('a')`
    text-decoration: none;
    margin-left: 5px;
    color: ${props => props.isSendingMailAgain === true ? "grey" : "#1976d2"};
    cursor: ${props => props.isSendingMailAgain === true ? "help" : "pointer"};
`;