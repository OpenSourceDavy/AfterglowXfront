import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import Mapshow from '../component/mapshow'
import {useNavigate} from "react-router-dom";
import StickyFooter from "../component/footer";



export  function Layout() {
    const nav = useNavigate();
    const handleSignup=()=>{
        nav('/signup')
    }
    const handleLogin=()=>{
        nav('/login')
    }
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AfterglowX
                    </Typography>

                    <Button color="inherit" onClick={handleLogin}>login</Button>
                    <Button color="inherit" onClick={handleSignup}>signup</Button>

                </Toolbar>
            </AppBar>
            <Mapshow ></Mapshow>
            <StickyFooter></StickyFooter>
        </Box>

    );
}