import './BottomNav.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import ColorTheme from '../../assets/ColorTheme';
import { ThemeProvider } from '@emotion/react'


const BottomNav = () => {

    const actions = [
        {
            label: 'מפה',
            icon: <MapIcon />
        },
        {
            label: 'רשימה',
            icon: <ListIcon />
        },
        {
            label: 'הוסף',
            icon: <AddIcon />
        },

    ]

    return (
        <>
            <ThemeProvider theme={ColorTheme}>
                <Box className="bottom-nav">
                    <BottomNavigation
                        showLabels
                        onChange={(_, newValue) => {
                            console.log(newValue)
                        }}
                    >
                        {actions.map(action => <BottomNavigationAction label={action.label} icon={action.icon} />)}
                    </BottomNavigation>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default BottomNav