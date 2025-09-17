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
import React, { useEffect, useState } from "react";
import Articles from "../components/Articles";
import { BeatLoader } from "react-spinners";

function Services() {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const[loading, setLoading] = useState(false);
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/services.json');
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (error) {
      // console.error('Error fetching services:', error);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  const findItem = services.find(item => item.slug === router.query.services);
  const bulletPoints = findItem?.serviceOverview
    ?.split("\n") // new line অনুযায়ী ভাগ
    .map(line => line.replace(/^bullatpoint:\s*/, "")) // 'bullatpoint:' remove করা
    .filter(line => line.trim() !== ""); // খালি লাইন বাদ
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
            {findItem?.title} <span style={{ color: "#12A551" }}>Services</span>
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography sx={{ fontSize: 16, color: "#AAAAAA" }}>
              HOME
            </Typography>
            <img src={"/assets/about/rightArrow.svg"} width={14} />
            <Typography sx={{ fontSize: 16, color: "#AAAAAA", textTransform: "uppercase" }}>
              Services
            </Typography>
            <img src={"/assets/about/rightArrow.svg"} width={14} />
            <Typography sx={{ fontSize: 16, color: "#AAAAAA", textTransform: "uppercase" }}>
              {router?.query.services ? router.query.services.split("-").join(" ") : "Not Found"}

            </Typography>
          </Stack>
        </Stack>

        <img
          src={"/assets/service/banner2.svg"}
          width={"100%"}
          style={{ marginTop: "23px" }}
        />
      </Box>

      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", }}>
        <Grid container spacing={4} my={5} alignItems={"center"}  >
          {/* inner grid 1 */}
          <Grid size={{ xs: 12, md: 6 }}  >
            <Stack direction={"column"} spacing={5}>
              <Stack direction={"column"}>  <Typography
                sx={{ color: "#2A6498", fontSize: {md:36,xs:24}, fontWeight: 700, textTransform: "uppercase" }}
              >
                OUR {findItem?.title} SERVICE
              </Typography>
                {/* <Typography sx={{ color: "#222222", fontSize: 28 }}>
                  Medicine
                </Typography>  */}
              </Stack>

              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",

                  width: "100%",

                }}
              >
                {findItem?.fullDescription}
              </Typography>

              {/* <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",

                  width: "100%",
                  maxWidth: 600,
                }}
              >
                The organisation has come a long way since its humble beginnings
                in 1993 when it was presented as a gift by our Founder, Syed
                Humayun Kabir, to the patron Sajida Humayun Kabir to mark their
                25th wedding anniversary. Syed Humayun Kabir served as SAJIDA’s
                Chairperson for almost two decades and also as board member of
                Renata Limited.
              </Typography> */}
            </Stack>
          </Grid>
          {/* inner grid 2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src={"/assets/about/hospitalStory.svg"}
              style={{ width: "100%", maxWidth: "873px", maxHeight: "553px" }}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{ color: "#2A6498", fontSize: 36, fontWeight: 700, mb: 2 }}
        >
          Service Overview
        </Typography>

        <div style={{ color: "#222222", fontSize: 16, textAlign: "justify", marginBottom: 16 }}>
          <strong>{bulletPoints?.shift()}</strong>
          <ul>
            {bulletPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* <Box component="ul" sx={{ pl: 4, mb: 4 }}>
          <Typography
            component="li"
            sx={{ fontSize: 16, color: "#222222", mb: 1 }}
          >
            Etiam blandit felis justo, vel vulputate enim vulputate vulputate
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: 16, color: "#222222", mb: 1 }}
          >
            Ord varius netaque penatibus et magnis dis parturient mentes
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: 16, color: "#222222", mb: 1 }}
          >
            Nascenas vitae lectus o orci tristique sollicitudin eos sed nisi
          </Typography>
          <Typography
            component="li"
            sx={{ fontSize: 16, color: "#222222", mb: 1 }}
          >
            Nullam elit ligula, sodales sed mauris nt, cursus porttitor est
          </Typography>
        </Box>

        <Grid container spacing={5} py={1} >
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack direction={"column"}>
              <Typography
                sx={{
                  color: "#2A6498",
                  fontSize: 28,
                  fontWeight: 700,
                  mb: 3,

                }}
              >
                Advantages
              </Typography>

              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 18,
                  textAlign: "justify",

                  mb: 4,
                  width: "100%",
                  maxWidth: 1200,
                }}
              >
                Donec commodo ercu porttitor neque convallis tincidunt. Proin
                viverra consectetur odio, ci imperdiet turpis malesuada eu.
                Nascenas quis turpis o nisi pulvinar convallis vitae sed massa.
                Aliquam eget por minus erus.
              </Typography>

              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 18,
                  textAlign: "justify",
                  mb: 4,
                  width: "100%",
                  maxWidth: 1200,
                }}
              >
                Nullam placerat, tellus eu eleifend ultricies, turpis augue
                rutrum justo, ut molestie purus locus ut magna.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack direction={"column"}>
              <Typography
                sx={{
                  color: "#2A6498",
                  fontSize: 28,
                  fontWeight: 700,
                  mb: 3,

                }}
              >
                Health Care Plans
              </Typography>

              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 18,
                  textAlign: "justify",
                  mb: 4,
                  width: "100%",
                  maxWidth: 1200,
                }}
              >
                Cros kocino sit amet elit eu occumsan. Vestibulum auctor nec
                metus e sodales. Proin dignissim sem vel ipsum occumsan congue.
                Quisque looreet orci diam, non fringilla massa fusius nec. Horbi
                turpis elit, aliquam imperdiet tempor eu, semper vel diam.Cros
                kocino sit amet elit eu occumsan. Vestibulum auctor nec metus e
                sodales. Proin dignissim sem vel ipsum occumsan congue. Quisque
                looreet orci diam, non fringilla massa fusius nec. Horbi turpis
                elit, aliquam imperdiet tempor eu, semper vel diam.
              </Typography>
            </Stack>
          </Grid>
        </Grid> */}

        {/* here */}
        <Box
          sx={{
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
              textAlign: "start",
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
                  textTransform: "capitalize"
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <br />
          {/* <Articles event={events} headingTitle={"Articles and News"} headingSubTitle={"Doctors & Hospital"} />
          <Articles event={events} headingTitle={"Publication"} headingSubTitle={"Doctors & Hospital"} /> */}
        </Box>
      </Box>

      {/* Fixing the Box to properly render */}
      {/* <Box sx={{ padding: 2, textAlign: "center" }}>
        {router.query.services ? (
          <Typography variant="h6">Service: {router.query.services}</Typography>
        ) : (                     
          <Typography variant="h6">Service Not Found</Typography>
        )}
      </Box>
      <Box>{router.query.services}</Box> */}
    </>
  );
}

export default Services;
