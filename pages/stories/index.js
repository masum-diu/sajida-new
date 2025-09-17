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
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StoryCard from "../components/StoryCard";
import { BeatLoader } from "react-spinners";
import instance from "../api/api_instance";

function storiesPage() {
  const [data, setData] = useState([]);
  // console.log("stories", data);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get("/pages/135");

      setData(response.data.body);
      setLoading(false);
    } catch (error) {
      // console.error("Error fetching data:", error);
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

  const storyItems = [
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
    {
      image: "/assets/stories/people.svg",
      date: "SEPTEMBER 28, 2024",
      title: "Can creatine supplements help people",
      description: "Lorem Ipsum is simply dummy text...",
      slug: "creatine-supplements",
    },
  ];

  const router = useRouter();

  return (
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: 60, fontWeight: 500 }}>
            Case <span style={{ color: "#12A551" }}>Stories</span>
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
          src={`https://sajedabackend.etherstaging.xyz/${data[0]?.data[0]?._mave?.file_path}`}
          width={"100%"}
         style={{ marginTop: "23px", height: 469, borderRadius: 16, objectFit: "cover" }}
        />
        <Typography
          sx={{
            color: "#2A6498",
            fontSize: 36,
            fontWeight: 700,
            textTransform: "uppercase",
            mt: 5,
          }}
        >
          {data[1]?.data[0]?._mave?.title}
        </Typography>
        <Typography
          sx={{ color: "#222222", fontSize: 28 }}
          dangerouslySetInnerHTML={{
            __html: data[1]?.data[0]?._mave?.description, // fixed typo
          }}
        />

        <Box
          sx={{
            bgcolor: "#EAF0F5",
            p: { xs: 4, md: 6 },
            borderRadius: "16px",

            margin: "auto",
            my: 4,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Left Column */}
            <Grid size={{ md: 6, xs: 12 }}>
              <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <img
                  alt="Dr. Shaila Sabrin"
                  src="/assets/stories/profile.svg"
                  sx={{ width: 64, height: 64 }}
                />
                <Box>
                  <Typography fontSize={24} fontWeight={700}>
                    {data[1]?.data[2]?._mave?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#12A551", fontWeight: 500, fontSize: 16 }}
                    dangerouslySetInnerHTML={{
                      __html: data[1]?.data[2]?._mave?.description,
                    }}
                  />
                </Box>
              </Stack>
              <Typography
                variant="body2"
                sx={{ color: "#4B4B4B", textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: data[1]?.data[2]?._mave?.altDescription,
                }}
              />
            </Grid>

            {/* Right Column */}
            <Grid size={{ md: 6, xs: 12 }}>
              <Box
                sx={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[1]?.data[1]?._mave?.file_path}`}
                  alt="Operation Room"
                  width={600}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography sx={{ fontSize: 28, mt: 6 }}>All Case Stories</Typography>
  <Grid container spacing={2} mb={6}>
  {Array.isArray(data[2]?.data) &&
    data[2].data.map((item, index) => (
      <Grid item key={index} md={3} xs={12}>
        <StoryCard
          image={
            item._mave?.file_path
              ? `https://sajedabackend.etherstaging.xyz/${item._mave.file_path}`
              : "/assets/stories/people.svg"
          }
          date={item._mave?.updated_at || ""}
          title={item._mave?.title_en || ""}
          description={item._mave?.description_en || ""}
          slug={item._mave?.id?.toString() || ""}
        />
      </Grid>
    ))}
</Grid>
      </Box>
    </>
  );
}

export default storiesPage;
