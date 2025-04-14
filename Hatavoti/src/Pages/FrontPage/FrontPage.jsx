import { Box } from "@mui/material"
import BottomNav from '../../Components/BottomNav/BottomNav.jsx'
import "./FrontPage.css"

const FrontPage = () => {

    return(
        <>
            <Box className="front-page">
                <Box className="map">
                    Map
                </Box>
            </Box>
            <BottomNav />
        </>
    )
}

export default FrontPage