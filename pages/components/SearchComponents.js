import {
    Box,
    Drawer,
    Grid,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { BeatLoader } from "react-spinners";
import SearchIcon from '@mui/icons-material/Search';
import SpecialistCard from "./SpecialistCard";

function SearchComponents({ open, setOpen }) {
    const [services, setServices] = useState([]); // array
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // fetch data
    const fetchServices = async () => {
        try {
            setLoading(true);
            const response = await fetch("/doctors.json");
            const data = await response.json();
            setServices(data); // this is an array of departments
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    // flatMap all doctors from all departments
    const allDoctors = services.flatMap((dept) => dept.doctors);

    // filter by searchTerm
    const filteredDoctors = allDoctors.filter((doctor) =>
        searchTerm
            ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
            : true
    );

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    flexDirection: "column",
                }}
            >
                <BeatLoader color="#191919" size={30} />
            </Box>
        );
    }

    return (
        <Drawer
            anchor="top"
            variant="temporary"
            PaperProps={{
                sx: {
                    //   height: 400,
                    bgcolor: "#2A6498",
                },
            }}
            open={open}
            onClose={() => setOpen(false)}
        >
            {/* Heading */}
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                    width: "90%",
                    maxWidth: "1720px",
                    margin: "0 auto",
                    mt: 4,
                    color: "#fff",
                }}
            >
                <Typography fontSize={{ md: 36, xs: 18 }} fontWeight={500}>
                    What can we help you find?
                </Typography>
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                        backgroundColor: "#FFF",
                    }}
                >
                    <CloseIcon sx={{ color: "#000" }} />
                </IconButton>
            </Stack>

            {/* Search input */}
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                    width: "90%",
                    maxWidth: "1720px",
                    margin: "0 auto",
                    mt: 5,
                    color: "#fff",
                }}
            >
                <TextField
                    id="standard-basic"
                    label=""
                    variant="standard"
                    placeholder="Search Doctor Name"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputLabelProps={{
                        sx: {
                            color: "#fff",
                            "&.Mui-focused": {
                                color: "#fff",
                            },
                        },
                    }}
                    InputProps={{
                        disableUnderline: false,
                        sx: {
                            color: "#fff",
                            "&:before": {
                                borderBottom: "1px solid #fff",
                            },
                            "&:hover:not(.Mui-disabled):before": {
                                borderBottom: "1px solid #fff",
                            },
                            "&:after": {
                                borderBottom: "1px solid #fff",
                            },
                        },
                        startAdornment: (
                            <InputAdornment position="start" sx={{color:"#fff"}}>
                                <SearchIcon  />
                            </InputAdornment>
                        ),
                    }}

                />

            </Stack>

            {/* Search Results */}
            {/* Search Results */}
            <Box
                sx={{
                    width: "90%",
                    maxWidth: "1720px",
                    margin: "0 auto",
                    mt: 3,
                    color: "#fff",
                }}
            >
                {searchTerm ? (
                    <Grid container spacing={2} my={6}>
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((item, index) => (
                                <Grid item md={4} size={{ md: 4, lg: 4, xl: 3, xs: 12 }} key={index}>
                                    <SpecialistCard
                                        title={item?.name}
                                        cardImg={item?.image || "/assets/images.png"}
                                        des={item?.designation?.slice(0, 20)}
                                        dig={item?.qualifications}
                                        btn="View Profile"
                                        slug={item?.slug || `doctor-${index}`}
                                        path={item.path}
                                        department={item?.department}
                                        view={setOpen}
                                        stop={searchTerm}
                                    />
                                </Grid>
                            ))
                        ) : (
                            <Typography sx={{ fontSize: 18, mt: 2 }}>
                                No doctors found.
                            </Typography>
                        )}
                    </Grid>
                ) : null}
            </Box>

        </Drawer>
    );
}

export default SearchComponents;
