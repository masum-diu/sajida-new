import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

function appointment() {
  return (
    <Box
          sx={{
            width: "90%",
            maxWidth: "1720px",
            margin: "0 auto",
            my: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              
              mb: 4,
              color: "#2A6498",
              textAlign: "center",
            }}
          >
            Appointment Form
          </Typography>

          <Grid container spacing={3}>
            {/* Name - Required */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Name <span style={{color:"#EA0004"}}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your name"
                variant="outlined"
                required
                sx={{
                 "& .MuiOutlinedInput-root": {
                    borderRadius: "24px",
                  },
                  maxWidth: "556px",
                }}
              />
            </Grid>

            {/* Phone - Required */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Phone <span style={{color:"#EA0004"}}>*</span>
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your phone number"
                variant="outlined"
                type="tel"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "24px",
                  },
                  maxWidth: "556px",
                }}
              />
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Email
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your email"
                size="small"
                variant="outlined"
                type="email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "24px",
                  },
                  maxWidth: "556px",
                }}
              />
            </Grid>

            {/* Department */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Department
              </Typography>
              <Select
                fullWidth
                displayEmpty
                size="small"
                variant="outlined"
                defaultValue=""
                renderValue={(selected) => selected || "Select Department"}
                sx={{
                  borderRadius: "24px",
                  maxWidth: "556px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Department
                </MenuItem>
                <MenuItem value="dummy">Dummy</MenuItem>
                <MenuItem value="cardiology">Cardiology</MenuItem>
                <MenuItem value="neurology">Neurology</MenuItem>
              </Select>
            </Grid>

            {/* Service */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Service
              </Typography>
              <Select
                fullWidth
                displayEmpty
                size="small"
                variant="outlined"
                defaultValue=""
                renderValue={(selected) => selected || "Select Service"}
                sx={{
                  borderRadius: "24px",
                  maxWidth: "556px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Service
                </MenuItem>
                <MenuItem value="dummy">Dummy</MenuItem>
                <MenuItem value="consultation">Consultation</MenuItem>
                <MenuItem value="checkup">Routine Checkup</MenuItem>
              </Select>
            </Grid>

            {/* Doctors */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Doctors
              </Typography>
              <Select
                fullWidth
                size="small"
                displayEmpty
                variant="outlined"
                defaultValue=""
                renderValue={(selected) => selected || "Select Doctor"}
                sx={{
                  borderRadius: "24px",
                  maxWidth: "556px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Doctor
                </MenuItem>
                <MenuItem value="dummy">Dummy</MenuItem>
                <MenuItem value="dr-smith">Dr. Smith</MenuItem>
                <MenuItem value="dr-johnson">Dr. Johnson</MenuItem>
              </Select>
            </Grid>

            {/* Message - Full width */}
            <Grid size={{ xs: 12 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Message
              </Typography>
              <TextField
                placeholder="Enter message"
                variant="outlined"
                multiline
                rows={8}
                sx={{
                 "& .MuiOutlinedInput-root": {
                    borderRadius: "24px",
                  },
                  width: "100%",
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#2A6498",
                  color: "white",
                  px: 8,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#2A6498",
                  },
                  maxwidth: 267,
                  borderRadius: 100,
                  textTransform:"capitalize"
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
  )
}

export default appointment