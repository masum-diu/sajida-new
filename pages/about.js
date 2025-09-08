import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { useRouter } from "next/router";

import AboutHeroSection from "./components/AboutHeroSection";
import ManagementTeam from "./components/ManagementTeam";
import { Navigation } from "swiper/modules";
import instance from "./api/api_instance";
import { BeatLoader } from "react-spinners";

function about() {
  const [open, setOpen] = useState(false);
  const [object, setObject] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef1 = useRef(null);
  const nextRef1 = useRef(null);

  const [data, setData] = useState([]);
  console.log("about", data);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get("/pages/132");

      setData(response.data.body);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
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

  const HandleMember = (item) => {
    setOpen(true);
    setObject(item);
  };
  const management = [
    {
      image: "/assets/about/M1img.svg",
      name: "Farooq Sobhan",
      deg: "Chairperson",
      about:
        "As a former Foreign Secretary of Bangladesh, Mr. Farooq Sobhan has had an extensive career in the diplomatic service of Bangladesh and has served in various capacities for the Ministry of Foreign Affairs, Government of Bangladesh. He was Bangladesh’s Ambassador to the People’s Republic of China, High Commissioner to Malaysia, High Commissioner to the Republic of India and Secretary of the Foreign Ministry. He additionally served as the Executive Chairman, Bangladesh Board of Investment and Special Envoy to the Prime Minister. His experience had also helped him play a pivotal role in the establishment of the SME Foundation in Bangladesh. Mr. Sobhan is currently serving as Chairman, Board of Trustees, Centre for Corporate Social Responsibility. He co-founded the Bangladesh Enterprise Institute (BEI) in 2000 and continues to serve as its President. Mr. Sobhan attended the University of Dhaka and the University of Oxford, and in 2003, served as a visiting professor at the George Washington University. He has written extensively on international relations and Bangladesh’s foreign relations, and has been a key-note speaker in various international conferences. His entire career path demonstrated his notable presence in international panels and advisory committees. ",
    },
    {
      image: "/assets/about/M2img.svg",
      name: "Md. Abdul Karim",
      deg: "Vice Chairperson",
      about:
        "As a former Foreign Secretary of Bangladesh, Mr. Farooq Sobhan has had an extensive career in the diplomatic service of Bangladesh and has served in various capacities for the Ministry of Foreign Affairs, Government of Bangladesh. He was Bangladesh’s Ambassador to the People’s Republic of China, High Commissioner to Malaysia, High Commissioner to the Republic of India and Secretary of the Foreign Ministry. He additionally served as the Executive Chairman, Bangladesh Board of Investment and Special Envoy to the Prime Minister. His experience had also helped him play a pivotal role in the establishment of the SME Foundation in Bangladesh. Mr. Sobhan is currently serving as Chairman, Board of Trustees, Centre for Corporate Social Responsibility. He co-founded the Bangladesh Enterprise Institute (BEI) in 2000 and continues to serve as its President. Mr. Sobhan attended the University of Dhaka and the University of Oxford, and in 2003, served as a visiting professor at the George Washington University. He has written extensively on international relations and Bangladesh’s foreign relations, and has been a key-note speaker in various international conferences. His entire career path demonstrated his notable presence in international panels and advisory committees. ",
    },
    {
      image: "/assets/about/M3img.svg",
      name: "Nihad Kabir",
      deg: "Member",
      about:
        "As a former Foreign Secretary of Bangladesh, Mr. Farooq Sobhan has had an extensive career in the diplomatic service of Bangladesh and has served in various capacities for the Ministry of Foreign Affairs, Government of Bangladesh. He was Bangladesh’s Ambassador to the People’s Republic of China, High Commissioner to Malaysia, High Commissioner to the Republic of India and Secretary of the Foreign Ministry. He additionally served as the Executive Chairman, Bangladesh Board of Investment and Special Envoy to the Prime Minister. His experience had also helped him play a pivotal role in the establishment of the SME Foundation in Bangladesh. Mr. Sobhan is currently serving as Chairman, Board of Trustees, Centre for Corporate Social Responsibility. He co-founded the Bangladesh Enterprise Institute (BEI) in 2000 and continues to serve as its President. Mr. Sobhan attended the University of Dhaka and the University of Oxford, and in 2003, served as a visiting professor at the George Washington University. He has written extensively on international relations and Bangladesh’s foreign relations, and has been a key-note speaker in various international conferences. His entire career path demonstrated his notable presence in international panels and advisory committees. ",
    },
    {
      image: "/assets/about/M4img.svg",
      name: "Dr. Rumana Dowla",
      deg: "Member",
      about:
        "As a former Foreign Secretary of Bangladesh, Mr. Farooq Sobhan has had an extensive career in the diplomatic service of Bangladesh and has served in various capacities for the Ministry of Foreign Affairs, Government of Bangladesh. He was Bangladesh’s Ambassador to the People’s Republic of China, High Commissioner to Malaysia, High Commissioner to the Republic of India and Secretary of the Foreign Ministry. He additionally served as the Executive Chairman, Bangladesh Board of Investment and Special Envoy to the Prime Minister. His experience had also helped him play a pivotal role in the establishment of the SME Foundation in Bangladesh. Mr. Sobhan is currently serving as Chairman, Board of Trustees, Centre for Corporate Social Responsibility. He co-founded the Bangladesh Enterprise Institute (BEI) in 2000 and continues to serve as its President. Mr. Sobhan attended the University of Dhaka and the University of Oxford, and in 2003, served as a visiting professor at the George Washington University. He has written extensively on international relations and Bangladesh’s foreign relations, and has been a key-note speaker in various international conferences. His entire career path demonstrated his notable presence in international panels and advisory committees. ",
    },
    {
      image: "/assets/about/M4img.svg",
      name: "Dr. Rumana Dowla",
      deg: "Member",
      about:
        "As a former Foreign Secretary of Bangladesh, Mr. Farooq Sobhan has had an extensive career in the diplomatic service of Bangladesh and has served in various capacities for the Ministry of Foreign Affairs, Government of Bangladesh. He was Bangladesh’s Ambassador to the People’s Republic of China, High Commissioner to Malaysia, High Commissioner to the Republic of India and Secretary of the Foreign Ministry. He additionally served as the Executive Chairman, Bangladesh Board of Investment and Special Envoy to the Prime Minister. His experience had also helped him play a pivotal role in the establishment of the SME Foundation in Bangladesh. Mr. Sobhan is currently serving as Chairman, Board of Trustees, Centre for Corporate Social Responsibility. He co-founded the Bangladesh Enterprise Institute (BEI) in 2000 and continues to serve as its President. Mr. Sobhan attended the University of Dhaka and the University of Oxford, and in 2003, served as a visiting professor at the George Washington University. He has written extensively on international relations and Bangladesh’s foreign relations, and has been a key-note speaker in various international conferences. His entire career path demonstrated his notable presence in international panels and advisory committees. ",
    },
    {
      image: "/assets/about/M4img.svg",
      name: "Dr. Rumana Dowla",
      deg: "Member",
      about:
        "As a former Foreign Secretary of Bangladesh, Mr. Farooq Sobhan has had an extensive career in the diplomatic service of Bangladesh and has served in various capacities for the Ministry of Foreign Affairs, Government of Bangladesh. He was Bangladesh’s Ambassador to the People’s Republic of China, High Commissioner to Malaysia, High Commissioner to the Republic of India and Secretary of the Foreign Ministry. He additionally served as the Executive Chairman, Bangladesh Board of Investment and Special Envoy to the Prime Minister. His experience had also helped him play a pivotal role in the establishment of the SME Foundation in Bangladesh. Mr. Sobhan is currently serving as Chairman, Board of Trustees, Centre for Corporate Social Responsibility. He co-founded the Bangladesh Enterprise Institute (BEI) in 2000 and continues to serve as its President. Mr. Sobhan attended the University of Dhaka and the University of Oxford, and in 2003, served as a visiting professor at the George Washington University. He has written extensively on international relations and Bangladesh’s foreign relations, and has been a key-note speaker in various international conferences. His entire career path demonstrated his notable presence in international panels and advisory committees. ",
    },
  ];
  const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 10 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 10 },
    1200: { slidesPerView: 5, spaceBetween: 10 },
  };
  const breakpoint = {
    0: { slidesPerView: 1, spaceBetween: 0 },
    380: { slidesPerView: 1, spaceBetween: 15 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    900: { slidesPerView: 3, spaceBetween: 0 },
    1200: { slidesPerView: 4, spaceBetween: 0 },
  };
  const router = useRouter();

  return (
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: 60, fontWeight: 500 }}>
            About <span style={{ color: "#12A551" }}>Us</span>
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
              {router?.pathname ? router?.pathname.split("/") : "Not Found"}
            </Typography>
          </Stack>
        </Stack>

        <img
          src={"/assets/about/bannar.svg"}
          width={"100%"}
          style={{ marginTop: "23px" }}
        />

        <AboutHeroSection
          image1={`https://sajedabackend.etherstaging.xyz/${data[0]?.data[5]?._mave?.file_path}`}
          image2={"/assets/about/aboutImg2.svg"}
          title1={data[1]?.data[2]?._mave?.title}
          title2={data[1]?.data[2]?._mave?.description}
          subtitle1={""}
          subtitle2={"Healthcare"}
          description={data[1]?.data[2]?._mave?.altDescription}
          image3={"/assets/about/mission.svg"}
          title3={data[1]?.data[3]?._mave?.title}
          des1={data[1]?.data[3]?._mave?.description}
          image4={"/assets/about/vision.svg"}
          title4={data[1]?.data[4]?._mave?.title}
          des2={data[1]?.data[4]?._mave?.description}
          button1={"Learn More"}
          disable={router?.pathname}
        />

        <Grid container spacing={{ md: 0, xs: 2 }} mt={5}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: "0px 2px 4px rgba(18, 165, 81, 0.05)",
                border: "1px solid #EAF0F5",
                borderRadius: "10px 0 0 10px",
              }}
            >
              {/* 10+,3,60K+ */}
              <Stack alignItems={"center"} direction={"column"}>
                <Typography fontSize={48} fontWeight={500}>
                  {data[2]?.data[0]?._mave?.title}
                </Typography>
                <Typography
                  fontSize={16}
                  color="#7A7A7A"
                  dangerouslySetInnerHTML={{
                    __html: data[2]?.data[0]?._mave?.description,
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: "0px 2px 4px rgba(18, 165, 81, 0.05)",
                border: "1px solid #EAF0F5",
              }}
            >
              <Stack alignItems={"center"} direction={"column"}>
                <Typography fontSize={48} fontWeight={500}>
                  {data[2]?.data[1]?._mave?.title}
                </Typography>
                <Typography
                  fontSize={16}
                  color="#7A7A7A"
                  dangerouslySetInnerHTML={{
                    __html: data[2]?.data[1]?._mave?.description,
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: "0px 2px 4px rgba(18, 165, 81, 0.05)",
                backgroundColor: "#2A6498",
                color: "#fff",
                border: "1px solid #EAF0F5",
              }}
            >
              <Stack alignItems={"center"} direction={"column"}>
                <Typography fontSize={48} fontWeight={500}>
                  {data[2]?.data[2]?._mave?.title}
                </Typography>
                <Typography
                  fontSize={16}
                  dangerouslySetInnerHTML={{
                    __html: data[2]?.data[2]?._mave?.description,
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              sx={{
                padding: 3,
                boxShadow: "0px 2px 4px rgba(18, 165, 81, 0.05)",
                border: "1px solid #EAF0F5",
                borderRadius: "0 10px 10px 0",
              }}
            >
              <Stack alignItems={"center"} direction={"column"}>
                <Typography fontSize={48} fontWeight={500}>
                  {data[2]?.data[3]?._mave?.title}
                </Typography>
                <Typography
                  fontSize={16}
                  color="#7A7A7A"
                  dangerouslySetInnerHTML={{
                    __html: data[2]?.data[3]?._mave?.description,
                  }}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('/assets/about/backgroundAbout.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // height: "100vh",
          // width: "90%", maxWidth: "1500px", margin: "0 auto",
          border: "1px solid #EAF0F5",
        }}
      >
        <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
          <Grid container spacing={4} mt={4} py={3}>
            {/* inner grid 1 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack>
                {/* sajida Hospiat story */}
                <Typography
                  sx={{ color: "#0D5EAE", fontSize: 36, fontWeight: 700 }}
                  dangerouslySetInnerHTML={{
                    __html: data[3]?.data[0]?._mave?.title,
                  }}
                />
                <Typography
                  sx={{ color: "#222222", fontSize: 28 }}
                  dangerouslySetInnerHTML={{
                    __html: data[3]?.data[0]?._mave?.description,
                  }}
                />

                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: 16,
                    textAlign: "justify",
                    mt: 6,
                    width: "100%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: data[3]?.data[0]?._mave?.altDescription,
                  }}
                />

                <Typography
                  sx={{
                    color: "#222222",
                    fontSize: 16,
                    textAlign: "justify",
                    mt: 2,
                    width: "100%",
                    maxWidth: 600,
                  }}
                ></Typography>
              </Stack>
            </Grid>
            {/* inner grid 2 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <img
                src={"/assets/about/hospitalStory.svg"}
                style={{ width: "100%", maxWidth: 873 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 3 }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Stack direction={"column"}>
            {/* our management */}
            <Typography fontSize={36} fontWeight={700} color="#0D5EAE">
              {data[4]?.data[0]?._mave?.title}
            </Typography>
            <Typography
              fontSize={28}
              dangerouslySetInnerHTML={{
                __html: data[4]?.data[0]?._mave?.description,
              }}
            />
          </Stack>
          <Stack
            direction="row"
            // spacing={1}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            mb={1}
          >
            <IconButton ref={prevRef}>
              <img src="/assets/left.svg" alt="" width={30} />
            </IconButton>
            <IconButton ref={nextRef}>
              <img src="/assets/right.svg" alt="" width={30} />
            </IconButton>
          </Stack>
        </Stack>

        {/* image slider */}
        <Swiper
          style={{ marginTop: 20 }}
          modules={[Navigation]}
          breakpoints={breakpoints}
          spaceBetween={10}
          //  loop={true}
          pagination={{
            clickable: true,
          }}
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
          className="mySwiper"
        >
          {data[4]?.data[1]?._mave?.cards.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                // src={item.media_files?.file_path}
                src={`https://sajedabackend.etherstaging.xyz/${item.media_files?.file_path}`}
                width={"100%"}
                onClick={() => HandleMember(item)}
                style={{ borderRadius: 16, cursor: "pointer" }}
              />
              <Typography sx={{ fontSize: 20, fontWeight: 600, mt: 1 }}>
                {item.title_en}
              </Typography>
              <Typography
                sx={{ fontSize: 16, color: "#AAAAAA" }}
                dangerouslySetInnerHTML={{ __html: item.description_en }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* new section awards */}
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={2}
        >
          <Stack direction={"column"}>
            <Typography fontSize={36} fontWeight={700} color="#0D5EAE">
              {data[5]?.data[0]?._mave?.title}
            </Typography>
            <Typography fontSize={28}>
              {data[5]?.data[1]?._mave?.description}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            // spacing={1}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            mb={1}
          >
            <IconButton ref={prevRef1}>
              <img src="/assets/left.svg" alt="" width={30} />
            </IconButton>
            <IconButton ref={nextRef1}>
              <img src="/assets/right.svg" alt="" width={30} />
            </IconButton>
          </Stack>
        </Stack>

        {/* image slider */}
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
          {
            // "/assets/about/award.svg",
            // "/assets/about/award.svg",
            // "/assets/about/award.svg",
            // "/assets/about/award.svg",
            // "/assets/about/award.svg",
            data[5]?.data[1]?.mave?.medias[0]?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${item.file_path}`} // src={item.file_path}
                  width="100%"
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
      <ManagementTeam open={open} setOpen={setOpen} data={object} />
    </>
  );
}

export default about;
