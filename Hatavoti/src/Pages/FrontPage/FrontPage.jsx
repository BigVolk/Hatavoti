import { MapContainer, TileLayer,  } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { Box } from "@mui/material"
import BottomNav from '../../Components/BottomNav/BottomNav.jsx'
import "./FrontPage.css"

const FrontPage = () => {

    return (
        <>
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
        </>
    )
}

export default FrontPage