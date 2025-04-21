import './BottomNav.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';

const BottomNav = () => {

    const iconStyle = {
        color: "white"
    }

    const actions = [
        {
            label: 'מפה',
            icon: <MapIcon sx={iconStyle}/>
        },
        {
            label: 'רשימה',
            icon: <ListIcon sx={iconStyle}/>
        },
        {
            label: 'הוסף',
            icon: <AddIcon sx={iconStyle}/>
        },

    ]

    return (
        <>
            <Box className="bottom-nav">
                <BottomNavigation
                    sx={{
                        backgroundColor: "#808000",
                    }}
                    showLabels
                    onChange={(_, newValue) => {
                        console.log(newValue)
                    }}
                >
                    {actions.map(action => <BottomNavigationAction label={action.label} icon={action.icon} sx={iconStyle}/>)}
                </BottomNavigation>
            </Box>
        </>
    )
}

export default BottomNav