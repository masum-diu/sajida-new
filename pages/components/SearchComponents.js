import { Drawer, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
function SearchComponents({ open, setOpen }) {
    return (
        <Drawer anchor="top" variant="temporary"
            PaperProps={{
                sx: {
                    height: 250,
                    bgcolor: "#2A6498",
                    // width: '90%',
                    // maxWidth: 320,
                    // height: '100vh', // full height
                    // overflow: 'hidden'

                },
            }} open={open} onClose={() => setOpen(false)}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", mt: 4, color: "#fff" }}>
                <Typography fontSize={{md:36,xs:18}} fontWeight={500}>What can we help you find?</Typography>
                <IconButton onClick={() => setOpen(false)} sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", backgroundColor: "#FFF", }}>
                    <CloseIcon color='#fff' />
                </IconButton>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", mt: 5, color: "#fff" }}>
                <TextField
                    id="standard-basic"
                    label="Search Your Item"
                    variant="standard"
                    fullWidth
                    InputLabelProps={{
                        sx: {
                            color: '#fff', // Label color
                            '&.Mui-focused': {
                                color: '#fff', // Focused label color
                            },
                        },
                    }}
                    InputProps={{
                        disableUnderline: false,
                        sx: {
                            color: '#fff', // Text color
                            '&:before': {
                                borderBottom: '1px solid #fff', // default underline color
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottom: '1px solid #fff', // hover underline color
                            },
                            '&:after': {
                                borderBottom: '1px solid #fff', // focused underline color
                            },
                        },
                    }}
                />
            </Stack>
        </Drawer>
    )
}

export default SearchComponents