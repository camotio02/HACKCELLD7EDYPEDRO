import styled from "@emotion/styled";
import { Box, Button, Link } from "@mui/material";
import { Root } from "../root/root_styles";
export const BoxMain = styled(Box)(({ theme }) => ({
    width: '90%',
    height: 'auto',
    paddingBlock: '1rem',
    borderRadius: "5px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    gap: 10,
    boxShadow: Root.boxShadow,
    border: Root.border,
}));
export const MyButton = styled(Button)(({ theme }) => ({
    cursor: 'pointer',
    color: 'white',
    width: "100%",
    mt: 3,
    mb: 2,
    backgroundColor: Root.color_button,
    borderRadius: '0',
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    '&&::hover': {
        backgroundColor: 'darkpurple',
        cursor: 'pointer',
    },
}));
export const MyLink = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    color: 'white',
    width: "100%",
    marginTop: 10,
    mb: 2,
    backgroundColor: Root.color_link,
    borderRadius: '0',
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    textDecoration: 'none',
}));