import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import SpecialistCard from "./SpecialistCard";
function Dep_Doctor_bodyparts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef1 = useRef(null);
  const nextRef1 = useRef(null);
  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 10 },
    1200: { slidesPerView: 4, spaceBetween: 10 },
    1920: { slidesPerView: 5, spaceBetween: 10 },
  };
  const breakpoint = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 2, spaceBetween: 10 },
    1200: { slidesPerView: 2, spaceBetween: 10 },
    1920: { slidesPerView: 3, spaceBetween: 20 },
  };
  const specialistItems = [
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Akter ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-Akter",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
    },
  ];
  return (
    <>
      <Stack direction={"column"} spacing={1}>
        <Typography fontSize={36} fontWeight={700} color="#0D5EAE">
          Healthcare at Its Finest
        </Typography>
        <Typography fontSize={28}>Our Doctors Team</Typography>
      </Stack>
      <Stack
        mt={2}
        direction="row"
        // spacing={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={1}
      >
        <Box
          sx={{ backgroundColor: "#FFFFFF", px: 3, py: 1, borderRadius: 100 }}
        >
          <Typography
            fontSize={18}
            fontWeight={600}
            sx={{
              background: "linear-gradient(to right, #12A551, #76CB9A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Department
          </Typography>
        </Box>

        <Stack direction={"row"}>
          <IconButton ref={prevRef}>
            <img src="/assets/left.svg" alt="" width={30} />
          </IconButton>
          <IconButton ref={nextRef}>
            <img src="/assets/right.svg" alt="" width={30} />
          </IconButton>
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
        {[
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
          { icons: "/assets/cadorly.svg", title: "Cardiology" },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <Paper
              elevation={0}
              sx={{
                maxWidth: 322,
                borderRadius: "16px",
                border: "1px solid #EAF0F5",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
                height={83}
              >
                <img src={item.icons} width={55} />
                <Typography variant="body1" color="initial">
                  {item.title}
                </Typography>
              </Stack>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>

      <Stack
        // mt={2}
        direction="row"
        // spacing={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={1}
      >
        <Box
          sx={{ backgroundColor: "#FFFFFF", px: 3, py: 1, borderRadius: 100 }}
        >
          <Typography
            fontSize={18}
            fontWeight={600}
            sx={{
              background: "linear-gradient(to right, #12A551, #76CB9A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Doctors
          </Typography>
        </Box>

        <Stack direction={"row"}>
          <IconButton ref={prevRef1}>
            <img src="/assets/left.svg" alt="" width={30} />
          </IconButton>
          <IconButton ref={nextRef1}>
            <img src="/assets/right.svg" alt="" width={30} />
          </IconButton>
        </Stack>
      </Stack>
      <Swiper
        style={{ marginTop: 20 }}
        breakpoints={breakpoint}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef1.current,
          nextEl: nextRef1.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef1.current;
          swiper.params.navigation.nextEl = nextRef1.current;
          swiper.navigation?.init();
          swiper.navigation?.update();
        }}
        // spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {specialistItems.map((item, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Dep_Doctor_bodyparts;
