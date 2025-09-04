import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function specialists() {
  const router = useRouter();
  return (
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: 60, fontWeight: 500 }}>
            Our Dedicated <span style={{ color: "#12A551" }}>Specialists</span>
          </Typography>
          <Stack direction={"row"} spacing={1}>
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
              specialists
            </Typography>
            <img src={"/assets/about/rightArrow.svg"} width={14} />
            <Typography
              sx={{
                fontSize: 16,
                color: "#AAAAAA",
                textTransform: "uppercase",
              }}
            >
              {router?.query.specialists
                ? router.query.specialists.split("-").join(" ")
                : "Not Found"}
            </Typography>
          </Stack>
        </Stack>

        <img
          src={"/assets/specialist/banner2.svg"}
          width={"100%"}
          style={{ marginTop: "23px" }}
        />

        <Typography
          my={4}
          sx={{ color: "#2A6498", fontSize: 36, fontWeight: 700 }}
        >
          DOCTORS DETAILS
        </Typography>

        <Grid container spacing={10}>
          {/* first grid */}
          <Grid size={{ md: 4, xs: 12 }}>
            <Paper
              elevation={0}
              sx={{
                maxWidth: 544,
                borderRadius: 3,
                overflow: "hidden",
                border: "3px solid #2A6498",
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Stack spacing={0}>
                {/* Doctor Image */}
                <Box
                  component="img"
                  src="/assets/specialist/docimg.svg"
                  alt="Doctor"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    backgroundColor: "#fff",
                  }}
                />

                {/* Blue Background Section */}
                <Box sx={{ backgroundColor: "#2A6498", py: 2, px: 2 }}>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 600, color: "#ffffff" }}
                  >
                    Shaila Sabrin
                  </Typography>

                  <hr
                    style={{
                      border: "none",
                      height: "1px",
                      backgroundColor: "#4E7EAA",
                      width: 319,
                      margin: "12px auto",
                    }}
                  />

                  {/* Decorative Line */}
                  <Box
                    sx={{
                      height: 1,
                      backgroundColor: "#1C7DC1",
                      width: "50%",
                      mx: "auto",
                      my: 1.5,
                    }}
                  />

                  {/* Fake Button */}
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#12A551",
                      textTransform: "uppercase",

                      px: 2,
                      py: 0.5,
                    }}
                  >
                    Make an Appointment
                  </Typography>
                </Box>
              </Stack>
            </Paper>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              mt={1}
            >
              {/* Social Share */}
              <Box sx={{ py: 2 }}>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 600, color: "#000" }}
                >
                  Share on:
                </Typography>
              </Box>
              <img
                src="/assets/specialist/Symbol1.svg"
                width={12}
                alt="Facebook"
              />
              <img
                src="/assets/specialist/Symbol2.svg"
                width={20}
                alt="Twitter"
              />
              <img
                src="/assets/specialist/Symbol3.svg"
                width={20}
                alt="LinkedIn"
              />
            </Stack>
          </Grid>
          {/* second grid */}
          <Grid size={{ md: 8, xs: 12 }}>
            <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
              Shaila Sabrin
            </Typography>
            <Typography
              sx={{ color: "#12A551", fontSize: 12, fontWeight: 700 }}
            >
              Chief Dietitian MBBS, MD (Cardiology)
            </Typography>
            <hr
              style={{
                border: "none",
                height: "2px",
                backgroundColor: "#F0F0F0",
                // width: 319,
                margin: "12px auto",
              }}
            />
            <Box mt={4}>
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                M. Phil (Nutrition & Food Science–DU)
              </Typography>
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                MS (Food & Nutrition–DU)
              </Typography>
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                B. Sc (Food & Nutrition–DU)
              </Typography>
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>
                Chief Dietitian–Dietetics & Nutrition
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography
                component="li"
                sx={{ fontSize: 14, color: "#222222" }}
              >
                Ms. Shaila Sabrin obtained her{" "}
                <span style={{ fontWeight: 700 }}>M. Phil </span>(Nutrition &
                Food Science) from Dhaka University.
              </Typography>
              <Typography
                component="li"
                sx={{ fontSize: 14, color: "#222222" }}
              >
                Subsequently she completed 
                <span style={{ fontWeight: 700 }}>MS </span> and{" "}
                <span style={{ fontWeight: 700 }}>Sc.</span> in Food & Nutrition
                from the same UniversityHeld on 22 February 2025, the event,
                organised by
              </Typography>

              <Typography
                component="li"
                sx={{ fontSize: 14, color: "#222222" }}
              >
                She has experience of working in various national &
                multi–national organizations and hospitals At the Philanthropy
                Conclave 2025, SAJIDA in different positions i.e. Samorita
                Hospital; BRB Hospital (Gastro Liver Hospital); ICDDRB; At the
                Philanthropy Conclave 2025, SAJIDA Glaxo Smith Kline (gsk);
                Tetra Pak; Nursing Institute Medical College for Women, Uttara
                and sustainable care economy care economy IPDC as Nutrition
                Counselor/Nutritionist.
              </Typography>

              <Typography
                component="li"
                sx={{ fontSize: 14, color: "#222222" }}
              >
                Ms. Shaila attended trainings on Clinical Nutrition & Dietetics
                from BIRDEM General Hospital as Dietetics from BIRDEM General
                Hospital as well as Management & Prevention of Gestational
                Diabetes Mellitius organized by CGDM Project, Mellitius
                organized by CGDM Project, Bangladesh University of Health
                Science, Dhaka.
              </Typography>

              <Typography
                component="li"
                sx={{ fontSize: 14, color: "#222222" }}
              >
                Ms. Shaila attended trainings on Clinical Nutrition & Dietetics
                from BIRDEM General Hospital as Dietetics from BIRDEM General
                Hospital as abroad (Indonesia, Chennai, Indore, Bengaluru).
              </Typography>
              <Typography
                component="li"
                sx={{ fontSize: 14, color: "#222222" }}
              >
                Ms. Shaila attended trainings on Clinical Nutrition & Dietetics
                from BIRDEM General Hospital as Dietetics from BIRDEM General
                Hospital as and serving patients regularly.
              </Typography>
            </Box>
          </Grid>
        </Grid>
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
                  textTransform: "capitalize",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default specialists;
