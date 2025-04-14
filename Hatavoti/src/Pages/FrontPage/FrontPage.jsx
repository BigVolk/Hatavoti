import { MapContainer, TileLayer, } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { Box, Button } from "@mui/material"
import BottomNav from '../../Components/BottomNav/BottomNav.jsx'
import ColorTheme from '../../assets/ColorTheme.jsx'
import "./FrontPage.css"
import { ThemeProvider } from '@emotion/react'
import Topbar from '../../Components/Topbar/Topbar.jsx'

const FrontPage = () => {

    return (
        <>
            <Topbar />
            <ThemeProvider theme={ColorTheme}>
                <Box className="front-page">
                    <Box className="map">
                        <MapContainer center={[31.9510, 34.8881]} zoom={8} scrollWheelZoom={true}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </Box>
                </Box>
                <BottomNav />
            </ThemeProvider >
        </>
    )
}

export default FrontPage