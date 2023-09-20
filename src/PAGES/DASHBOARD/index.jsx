
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import *as S from './styles/index'
import { AppBar, Box, Button, Stack } from '@mui/material';
export const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <S.ContainerApp>
            <Box sx={{
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255,)', 
                top: 0,
                left:0,            }}>
                HACKCELL D7
                <Button variant='contained' size='small'>
                    Get started
                </Button>
            </Box> 
            opas
        </S.ContainerApp>
    );
};
