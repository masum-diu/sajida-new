import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function FormSubmit() {
    const [services, setServices] = useState(null)
    const [doctors, setDoctors] = useState(null)
    const [formData, setFormData] = useState(
        {
            name: "",
            phone: "",
            email: "",
            department: "",
            service: "",
            doctor: "",
            message: ""
        }
    )
    const department = doctors?.find(d => d.department === formData?.department);
    console.log(formData)
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    const handleSubmit = async () => {
        try {
            const payload = {
                form_id: "19",
                form_data: {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    doctor: formData.doctor,
                    department: formData.department,
                    service: formData.service,
                    message: formData.message
                },
                submitted_at: new Date().toISOString()
            };
            const response = await axios.post("https://sajedabackend.etherstaging.xyz/api/form-submission?form_id=19", payload, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.API_TOKEN}`,
                }
            });

            // console.log("Success:", response.data);
            alert("Form submitted successfully!");

        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response) {
                alert(`Submission failed: ${error.response.data.message}`);
            } else {
                alert("Submission failed. Please try again.");
            }
        }
    };
    return (
        <Box

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
                        Name <span style={{ color: "#EA0004" }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        Phone <span style={{ color: "#EA0004" }}>*</span>
                    </Typography>
                    <TextField
                        fullWidth
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        value={formData.department}
                        onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                        }
                        renderValue={(selected) => selected || "Select Department"}
                        sx={{
                            borderRadius: "24px",
                            maxWidth: "556px",
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Department
                        </MenuItem>
                        {doctors?.map((item, index) => <MenuItem key={index} value={item?.department}>{item?.department}</MenuItem>)}
                    </Select>
                </Grid>
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
                        value={formData.doctor}
                        onChange={(e) =>
                            setFormData({ ...formData, doctor: e.target.value })
                        }
                        renderValue={(selected) => selected || "Select Doctor"}
                        sx={{
                            borderRadius: "24px",
                            maxWidth: "556px",
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Doctor
                        </MenuItem>
                        {department?.doctors?.map((item, index) => <MenuItem key={index} value={item?.name}>{item?.name}</MenuItem>)}
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
                        value={formData.service}
                        onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                        }
                        renderValue={(selected) => selected || "Select Service"}
                        sx={{
                            borderRadius: "24px",
                            maxWidth: "556px",
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select Service
                        </MenuItem>
                        {services?.map((item, index) => <MenuItem key={index} value={item?.title}>{item?.title}</MenuItem>)}

                    </Select>
                </Grid>

                {/* Doctors */}


                {/* Message - Full width */}
                <Grid size={{ xs: 12 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                        Message
                    </Typography>
                    <TextField
                        placeholder="Enter message"
                        variant="outlined"
                        multiline
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
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
                            textTransform: "capitalize"

                        }}
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormSubmit