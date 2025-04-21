import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import hatavotiLogo from '../../assets/hatavoti-black.png'
import { useState } from "react";
import "./Topbar.css"

const Topbar = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <>
            <Box className="around-top-bar">
                <Box className="top-bar">
                    <TextField
                        onChange={(element) => console.log(element.target.value)}
                        onClick={() => console.log("clicked")}
                        type="text"
                        className="text-field"
                        placeholder={"חיפוש"}
                        variant="standard"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            direction: 'rtl',
                            backgroundColor: "#808000",
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
            </Box>
        </>
    )
}

export default Topbar