import {
  Paper,
  Typography,
  Chip,
  Box,
  Stack,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

function Testimony({ event }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 10 },
    1200: { slidesPerView: 3.5, spaceBetween: 10 },
    1920: { slidesPerView: 4, spaceBetween: 10 },
  };
  return (
    <>
      <Stack>
        <Typography sx={{ color: "#2A6498", fontSize: 36, fontWeight: 700 }}>
          Patient Testimonial
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography sx={{ fontSize: 28 }}>Doctors & Hospital</Typography>

          <Stack direction={"row"}>
            <IconButton ref={prevRef}>
              <img src="/assets/left.svg" alt="" width={30} />
            </IconButton>
            <IconButton ref={nextRef}>
              <img src="/assets/right.svg" alt="" width={30} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Swiper
        style={{ marginTop: 20, marginBottom: 20 }}
        breakpoints={breakpoints}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation?.init();
          swiper.navigation?.update();
        }}
        // spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {event?.map((event, index) => (
          <SwiperSlide key={index}>
            {/* code goes here */}

            <Paper
              elevation={0}
              sx={{
                maxWidth: 412,
                py: 4,
                borderRadius: 4,
                border: "1px solid #EAF0F5",
                // height:370,
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <Stack alignItems={"center"}>
                <Avatar src={`https://sajedabackend.etherstaging.xyz/${event?.media_files?.file_path}`} sx={{ width: 139, height: 139 }} />
              </Stack>

              <Box>
                <img src={event.qut} />
              </Box>

              <Typography
                sx={{
                  px: 2,
                  py: 3,
                  fontSize: 16,
                  color: "#AAAAAA",
                  textAlign: "justify",
                }}
              >
                {event.description_en
                    ?.replace(/<[^>]+>/g, '')
                    .split(/\s+/)
                    .slice(0, 36)
                    .join(" ") + "..."}
              </Typography>
              <Stack
                px={2}
                direction={{ md: "row", xs: "column" }}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  // onClick={() => router.push("/about")}
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 109,
                    height: 40,
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
                  Details
                </Button>
                <Stack direction={"column"}>
                  <Typography
                    sx={{ fontSize: 20, fontWeight: 700, color: "#2A6498" }}
                  >
                    {event.title_en}
                  </Typography>
                  <Typography sx={{ fontSize: 16, color: "#2A6498" }}>
                    Age: {event.title_bn}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Testimony;
