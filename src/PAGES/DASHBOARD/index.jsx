import { Fragment, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Typography } from "@mui/material"

export const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <Fragment>
            <Typography>
                Olá {user.displayName} Seja Bem-vindo <samp>
                    HACKCELLD7EDYPEDRO
                </samp>
            </Typography>
        </Fragment>
    )
}