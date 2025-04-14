import './BottomNav.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import MapIcon from '@mui/icons-material/Map';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';


const BottomNav = () => {

    return (
        <>
            <Box className="bottom-nav">
                <BottomNavigation
                    showLabels
                    onChange={(event, newValue) => {
                        console.log(newValue)
                    }}
                >
                    <BottomNavigationAction label="מפה" icon={<MapIcon />} />
                    <BottomNavigationAction label="רשימה" icon={<ListIcon />} />
                    <BottomNavigationAction label="הוסף" icon={<AddIcon />} />
                </BottomNavigation>
            </Box>
        </>
    )
}

export default BottomNav