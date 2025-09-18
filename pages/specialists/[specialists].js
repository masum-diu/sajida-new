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
import React, { useEffect, useMemo, useState } from "react";
import { BeatLoader } from "react-spinners";
import FormSubmit from "../components/FormSubmit";

function specialists() {
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  // Data fetch
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/doctors.json");
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (error) {
      // console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Memoized department
  const findDept = useMemo(() => {
    return services.find(
      (item) => item.department === router?.query?.department
    );
  }, [services, router?.query?.department]);

  // Memoized doctor
  const doctorsfind = useMemo(() => {
    return findDept?.doctors?.find(
      (doc) => doc.slug === router?.query?.specialists
    );
  }, [findDept, router?.query?.specialists]);


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
                  src="/assets/images.png"
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
                    {doctorsfind?.name}
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
              {doctorsfind?.name}
            </Typography>
            <Typography
              sx={{ color: "#12A551", fontSize: 14, fontWeight: 700 }}
            >
              {doctorsfind?.designation}
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
            {/* Qualifications */}
            <Box mt={4}>
              <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                Qualifications
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                {doctorsfind?.qualifications?.map((q, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#222",
                      mb: 0.5,
                    }}
                  >
                    {q}
                  </Box>
                ))}
              </Box>
            </Box>


            {/* Schedule */}
            <Box mt={2}>
              <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                Visiting Schedule
              </Typography>
              {doctorsfind?.schedule?.map((sch, idx) => (
                <Typography key={idx} sx={{ fontSize: 16, color: "#222" }}>
                  {sch.day} — {sch.time}
                </Typography>
              ))}
            </Box>
            {doctorsfind?.hospital && <Box mt={2}>
              <Typography sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}>
                Hospital
              </Typography>

              <Typography sx={{ fontSize: 16, color: "#222", }}>
                {doctorsfind?.hospital}
              </Typography>

            </Box>}

            {/* <Box mt={2}>
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
            </Box> */}
          </Grid>
        </Grid>
       <FormSubmit/>
      </Box>
    </>
  );
}

export default specialists;
