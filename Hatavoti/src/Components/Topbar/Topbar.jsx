import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import hatavotiLogo from '../../assets/hatavoti-black.png'
import "./Topbar.css"

const Topbar = () => {

    return (
        <>
            <Box className="around-top-bar">
                <Box className="top-bar">
                    <TextField
                        onSelect={() => console.log("selected")}
                        onEnded={() => console.log("abort")}
                        color="primary"
                        className="text-field"
                        placeholder={"חיפוש"}
                        variant="standard"
                        sx={{
                            backgroundColor: "#808000",
                            padding: '0 15px',
                        }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                                endAdornment: <InputAdornment position="end"><img className="hatavoti-logo" src={hatavotiLogo} /></InputAdornment>
                            }
                        }}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Topbar