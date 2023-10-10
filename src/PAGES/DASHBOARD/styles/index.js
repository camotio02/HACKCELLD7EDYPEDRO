
import { styled, Stack, Box, Typography, Tooltip, Container } from '@mui/material'
import { Root } from '../../../components/Global/root/root_styles'
export const ContainerApp = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    height: "100vh",
    backgroundColor: Root.light,
    color: Root.gray,
    fontFamily: Root.fontFamilyMonospace
}))