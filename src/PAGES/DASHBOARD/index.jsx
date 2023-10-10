
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import *as S from './styles/index'
import {  Card, Typography } from '@mui/material';
export const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return (
        <S.ContainerApp>
            <Card sx={{
                width:"100%"
            }}>
                opas
            </Card>
        </S.ContainerApp>
    );
};
