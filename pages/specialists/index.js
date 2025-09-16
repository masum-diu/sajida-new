import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SpecialistCard from "../components/SpecialistCard";
import { BeatLoader } from "react-spinners";


function specialistsPage() {
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const allDoctors = services?.flatMap(service => service.doctors) || [];
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredDoctors = allDoctors.filter(doctor => {
    const matchesDepartment = value ? doctor.department === value : true;
    const matchesName = searchTerm
      ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesDepartment && matchesName;
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const router = useRouter();
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/doctors.json");
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

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
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: {md:60,xs:40}, fontWeight: 500 }}>
            Our Dedicated <span style={{ color: "#12A551" }}>Specialists</span>
          </Typography>
          <Stack direction={"row"} spacing={1}  >
            <Typography sx={{ fontSize: 16, color: "#AAAAAA" }}>
              HOME
            </Typography>
            <img src={"/assets/about/rightArrow.svg"} width={14} />
            <Typography
              sx={{
                fontSize: 16,
                color: "#AAAAAA",
                textTransform: "uppercase",
              }}
            >
              {router?.pathname ? router?.pathname.split("/") : "Not Found"}
            </Typography>
          </Stack>
        </Stack>

        <img
          src={"/assets/specialist/banner.svg"}
          width={"100%"}
          style={{ marginTop: "23px", height: 469, borderRadius: 16, objectFit: "cover" }}
        />

        <Typography
          textAlign={"center"}
          sx={{ fontSize: 36, fontWeight: 700, color: "#2A6498", my: 2 }}
        >
          Our Dedicated Doctors Team
        </Typography>

        <Stack
          direction={{ md: "row", xs: "column" }}
          spacing={1}
          maxWidth={800}
          alignItems={"center"}
        >
          <Select
            fullWidth
            displayEmpty
            size="small"
            variant="outlined"
            defaultValue=""
            renderValue={(selected) => selected || "Select Department"}
            sx={{}}
            value={value}
            onChange={handleChange}

          >
            <MenuItem value="" disabled>
              Select Department
            </MenuItem>
            {services?.map((service, index) => (
              <MenuItem key={index} value={service?.department}>
                {service?.department}
              </MenuItem>
            ))}
          </Select>

          <TextField
            fullWidth
            size="small"
            placeholder="Search doctor by name"
            variant="outlined"
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#2A6498",
              color: "white",
              px: 8,
              py: 1.5,
              "&:hover": {
                bgcolor: "#2A6498",
              },
              maxwidth: 106,
              borderRadius: 50,
              textTransform: "capitalize",
            }}
          >
            Submit
          </Button> */}
        </Stack>

        <Grid container spacing={2} my={6}>
          {filteredDoctors.length > 0 ? filteredDoctors?.map((item, index) => (
            <Grid size={{ md: 4, xl: 3, xs: 12 }} key={index}>
              <SpecialistCard
                title={item?.name}
                cardImg={item?.image || "/assets/images.png"}
                des={item?.designation.slice(0, 20)}
                dig={item?.qualifications}
                btn="View Profile"
                slug={item?.slug || `doctor-${index}`}
                path={item.path}
                department={item?.department}
              />
            </Grid>
          )) : <Typography sx={{ fontSize: 18, mt: 2 }}>No doctors found.</Typography>}
        </Grid>
      </Box>
    </>
  );
}

export default specialistsPage;
