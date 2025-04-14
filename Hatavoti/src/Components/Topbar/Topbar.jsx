import { Box, InputAdornment, TextField } from "@mui/material"

import "./Topbar.css"

const Topbar = () => {
    return (
        <>
            <Box className="top-bar">
                <TextField
                placeholder={"חיפוש"}
                variant="standard"
                sx={{
                    backgroundColor: 'green',
                    borderRadius: '30px',
                    padding: '0 20px'
                }}
                slotProps={{    
                    input: {
                        startAdornment: <InputAdornment position="start">s</InputAdornment>,
                        endAdornment: <InputAdornment position="end">e</InputAdornment>
                    }
                }}
                />
            </Box>
        </>
    )
}

export default Topbar