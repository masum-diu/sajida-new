import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Stack,
  Button,
  Divider,
} from "@mui/material";
function SwiperCard({data}) {
  console.log(data)
  const objectData = [
    {
      title: "Transform Your Health",
      highlightText: "Your Health",
      highlightColor: "#12A551",
      description:
        "Explore a variety of tailored services aimed at enhancing your overall health and wellness.",
      image: "/assets/Home/HeroImage.svg",
      button1: "Learn More",
      button2: "Contact Us",
      item1: "10+ Years of Experience",
      item2: "3,60k+ Treated by Patients",
      item3: "100% Professional Doctor",
    },
    {
      title: "Transform Your Health ",
      highlightText: "Your Health",
      highlightColor: "#12A551",
      description:
        "Explore a variety of tailored services aimed at enhancing your overall health and wellness.",
      image: "/assets/Home/HeroImage.svg",
      button1: "Learn More",
      button2: "Contact Us",
      item1: "10+ Years of Experience",
      item2: "3,60k+ Treated by Patients",
      item3: "100% Professional Doctor",
    },
  ];
  return (
    <Swiper
      style={{ position: "relative" }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} custom-dot"></span>`;
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {objectData.map((item, index) => {
        const { title, highlightText, highlightColor } = item;
        const parts = title.split(highlightText);
        return (
          <SwiperSlide key={index}>
            <Grid container spacing={4} mt={{ md: 2 }}>
              <Grid size={{ md: 5, xs: 12 }} mt={{ md: 2 }}>
                <Typography
                  sx={{ fontWeight: 600, fontSize: { md: 50, xl: 60 } }}
                >
                  {parts[0]}
                  <Box
                    component="span"
                    sx={{ color: highlightColor, fontWeight: 600 }}
                  >
                    {highlightText}
                  </Box>
                  {parts[1]}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#4E7EAA",
                    maxWidth: 542,
                    mt: 1,
                  }}
                >
                  {item.description}
                </Typography>
                <Stack direction={"row"} spacing={2} py={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: 132,
                      height: 60,
                      fontWeight: 500,
                      borderRadius: 100,
                      fontSize: 16,
                      textTransform: "capitalize",
                      p: 1,
                      backgroundColor: "#2A6498", // ✅ Initial background color set
                      color: "#fff", // ✅ Text color
                      "&:hover": {
                        backgroundColor: "#2A6498", // ✅ Keep same on hover
                        boxShadow: "none",
                      },
                      "&:focus": {
                        outline: "none",
                        boxShadow: "none",
                      },
                      "&:focus-visible": {
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {item.button1}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      width: 128,
                      height: 60,
                      fontWeight: 500,
                      borderRadius: 100,
                      fontSize: 16,
                      textTransform: "capitalize",
                      p: 1,
                      // backgroundColor: '#2A6498', // ✅ Initial background color set
                      color: "#2A6498", // ✅ Text color

                      "&:focus": {
                        outline: "none",
                        boxShadow: "none",
                      },
                      "&:focus-visible": {
                        outline: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {item.button2}
                  </Button>
                </Stack>
                <Stack
                  direction={{ md: "row", xs: "column" }}
                  spacing={2}
                  pt={2}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 36, lineHeight: 1.2 }}
                  >
                    10+ <br />{" "}
                    <span
                      style={{
                        color: "#2A6498",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      Years of Experience
                    </span>
                  </Typography>
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    sx={{ height: 79, borderColor: "#C4C1C1" }}
                  />
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 36, lineHeight: 1.2 }}
                  >
                    3,60k+
                    <br />{" "}
                    <span
                      style={{
                        color: "#2A6498",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      Treated by Patients
                    </span>{" "}
                  </Typography>
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    sx={{ height: 79, borderColor: "#C4C1C1" }}
                  />
                  <Typography
                    sx={{ fontWeight: 600, fontSize: 36, lineHeight: 1.2 }}
                  >
                    100% <br />{" "}
                    <span
                      style={{
                        color: "#2A6498",
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                    >
                      Professional Doctor
                    </span>
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ md: 7, xs: 12 }}>
                <Box sx={{ position: "relative" }}>
                  <img src={item.image} alt="Hero" style={{ width: "100%" }} />

                  {/* Swiper pagination will be injected automatically here and positioned correctly */}
                </Box>

                <Stack
                  direction={{ md: "row", xs: "column" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}
                  py={4}
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <Paper
                    sx={{
                      width: "100%",
                      minHeight: 140,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 36,
                        lineHeight: 1.2,
                        textAlign: "center",
                      }}
                    >
                      10+ <br />{" "}
                      <span
                        style={{
                          color: "#2A6498",
                          fontWeight: 500,
                          fontSize: 18,
                        }}
                      >
                        Years of Experience
                      </span>
                    </Typography>
                  </Paper>

                  <Paper
                    sx={{
                      width: "100%",
                      minHeight: 140,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 36,
                        lineHeight: 1.2,
                        textAlign: "center",
                      }}
                    >
                      3,60k+
                      <br />{" "}
                      <span
                        style={{
                          color: "#2A6498",
                          fontWeight: 500,
                          fontSize: 18,
                        }}
                      >
                        Treated by Patients
                      </span>{" "}
                    </Typography>
                  </Paper>

                  <Paper
                    sx={{
                      width: "100%",
                      minHeight: 140,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 36,
                        lineHeight: 1.2,
                        textAlign: "center",
                      }}
                    >
                      100% <br />{" "}
                      <span
                        style={{
                          color: "#2A6498",
                          fontWeight: 500,
                          fontSize: 18,
                        }}
                      >
                        Professional Doctor
                      </span>
                    </Typography>
                  </Paper>
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperCard;
