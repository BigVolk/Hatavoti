import { Box, Button, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import hatavotiLogo from '../../assets/hatavoti-black.png'
import { use, useState } from "react";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PillOptions from "../PillOptions/PillOptions";
import "./Topbar.css"


const Topbar = () => {

    const [pillOptions, setPillOptions] = useState([
        {
            title: 'מסעדה',
            icon: <RestaurantIcon />,
            isClicked: false,
        },
        {
            title: 'בגדים',
            icon: <CheckroomIcon />,
            isClicked: false,
        },
        {
            title: 'המבורגר',
            icon: <LunchDiningIcon />,
            isClicked: false,
        },
        {
            title: 'בידור',
            icon: <TheaterComedyIcon />,
            isClicked: false,
        },
        {
            title: 'כושר',
            icon: <FitnessCenterIcon />,
            isClicked: false,
        },
        {
            title: 'מסעדה',
            icon: <RestaurantIcon />,
            isClicked: false,
        },
        {
            title: 'בגדים',
            icon: <CheckroomIcon />,
            isClicked: false,
        },
        {
            title: 'המבורגר',
            icon: <LunchDiningIcon />,
            isClicked: false,
        },
        {
            title: 'בידור',
            icon: <TheaterComedyIcon />,
            isClicked: false,
        },
        {
            title: 'כושר',
            icon: <FitnessCenterIcon />,
            isClicked: false,
        }
    ])
    const [searchText, setSearchText] = useState("")
    const [isFullScreen, setIsFullScreen] = useState(false)

    if (isFullScreen) {
        document.addEventListener('backbutton', () => {
            setIsFullScreen(!isFullScreen)
        })
    }

    return (
        <>
            <Box className="around-top-bar"
                sx={isFullScreen ?
                    {
                        height: '100vh',
                        zIndex: 9999,
                        backgroundColor: 'green'
                    } :
                    {
                        height: '20vh',
                        zIndex: 1000,
                    }
                }
            >
                <Box className="top-bar">
                    <TextField
                        onChange={(element) => setSearchText(element.target.value)}
                        onClick={() => setIsFullScreen(!isFullScreen)}
                        type="text"
                        className="text-field"
                        placeholder={"חיפוש"}
                        variant="standard"
                        sx={{
                            backgroundColor: "#808000",
                            display: 'flex',
                            justifyContent: 'center',
                            direction: 'rtl',
                            padding: '0 15px',
                            height: '50px',
                            "& .MuiInputBase-input": {
                                fontSize: '20px',
                                color: 'white'
                            }
                        }}
                        slotProps={{
                            input: {
                                endAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                startAdornment: <InputAdornment position="end"><img className="hatavoti-logo" src={hatavotiLogo} /></InputAdornment>
                            }
                        }}
                    />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    width: '100vw',
                    top: '75px',
                    height: '60px',
                    overflow: "auto",
                    whiteSpace: "nowrap",
                    scrollbarWidth: 'none',
                }}>
                    {!isFullScreen ? <PillOptions options={pillOptions} setPillOptions = {setPillOptions}/>: <></>}
                </Box>
            </Box>
        </>
    )
}

export default Topbar