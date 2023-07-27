import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';

export const Item = styled('li')(({ theme }) => ({
    display: "flex",
    padding: "0 5px",
    color: "#000",
    background: "#dbd9d9",
    fontSize: "18px",
    borderRadius: "4px",
    '&:not(:last-child)': { marginBottom: 5 },
    [theme.breakpoints.down('768')]: {
        width: "240px",
        
    },
    
}));

export const ItemInner = styled('div')(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.up('768')]: {
        display: "flex",

    }
    
}));

export const TextWrap = styled('div')(({ theme }) => ({
    width: "220px",
    overflowWrap: "break-word",
    [theme.breakpoints.up('768')]: {
        width: "250px",
    }
}));

export const Text = styled('p')`
    
`;

export const BtnWrap = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
}));

export const Btn = styled(DeleteIcon)(({ theme }) => ({
    cursor: "pointer",
    '&:hover': { color: "red" },
}));