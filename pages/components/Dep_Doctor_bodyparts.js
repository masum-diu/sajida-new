import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import SpecialistCard from "./SpecialistCard";

function Dep_Doctor_bodyparts() {
  const [doctors, setDoctors] = useState([]);
  const [doctorsprofile, setDoctorsprofile] = useState([]);
  // console.log(doctorsprofile)
  const [selectedDep, setSelectedDep] = useState(null);

  useEffect(() => {
    fetch("/doctors.json")
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        if (data && data.length > 0) {
          setDoctorsprofile(data[0].doctors || []);
          setSelectedDep(data[0].department); // auto select first
        }
      });
  }, []);

  const handeler = (dep) => {
    const department = doctors.find(d => d.department === dep);
    if (department && department.doctors) {
      setDoctorsprofile(department.doctors);
    } else {
      setDoctorsprofile([]);
    }
    setSelectedDep(dep);
  };



  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef1 = useRef(null);
  const nextRef1 = useRef(null);

  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 10 },
    1200: { slidesPerView: 3, spaceBetween: 10 },
    1920: { slidesPerView: 4, spaceBetween: 10 },
  };

  const breakpoint = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 2, spaceBetween: 10 },
    1200: { slidesPerView: 2, spaceBetween: 10 },
    1920: { slidesPerView: 3, spaceBetween: 20 },
  };



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
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {doctors?.map((item, index) => (
          <SwiperSlide key={index} style={{ cursor: "pointer" }} onClick={() => handeler(item?.department)}>
            <Paper
              elevation={0}
              sx={{
                maxWidth: 322,
                borderRadius: "16px",
                border: "1px solid #EAF0F5",
                backgroundColor: selectedDep === item?.department ? "#2A6498" : "#FFFFFF",
                color: selectedDep === item?.department ? "#FFFFFF" : "inherit",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
                height={83}
              >
                <img src={item?.image} width={55} alt="department icon" />
                <Typography variant="body1" >
                  {item?.department}
                </Typography>
              </Stack>
            </Paper>
          </SwiperSlide>
        ))}

      </Swiper>

      <Stack
        direction="row"
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
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {doctorsprofile?.map((item, index) => {
          // console.log(item)
          return (
            <SwiperSlide key={index}>
              <SpecialistCard
                title={item?.name}
                // Pass other necessary props to SpecialistCard
                cardImg={item?.image || "/assets/images.png"}
                des={item?.designation.slice(0, 20)}
                dig={item?.qualifications}
                btn="View Profile"
                slug={item?.slug || `doctor-${index}`}
                department={item?.department}

              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}

export default Dep_Doctor_bodyparts;