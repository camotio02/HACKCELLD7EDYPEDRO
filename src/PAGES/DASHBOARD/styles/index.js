
import { styled, Stack, Box, Typography, Tooltip, Container } from '@mui/material'
export const ContainerApp = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor:"rgb(84, 84, 84)",
    color: 'white !important',
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
}))