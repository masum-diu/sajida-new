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
import React from "react";
import StoryCard from "../components/StoryCard";

function storiesPage() {
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
          src={"/assets/stories/banner.svg"}
          width={"100%"}
          style={{ marginTop: "23px" }}
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
          our case stories
        </Typography>
        <Typography sx={{ color: "#222222", fontSize: 28 }}>
          Hospital & Doctor Team
        </Typography>
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
                    Dr. Shaila Sabrin
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#12A551", fontWeight: 500, fontSize: 16 }}
                  >
                    Chief Dietitian MBBS, MD (Cardiology)
                  </Typography>
                </Box>
              </Stack>
              <Typography
                variant="body2"
                sx={{ color: "#4B4B4B", textAlign: "justify" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker.
              </Typography>
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
                  src="/assets/stories/main.svg"
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
          {storyItems.map((item, index) => (
            <Grid Grid key={index} size={{ md: 3, xs: 12 }}>
              <StoryCard
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
                slug={item.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default storiesPage;
