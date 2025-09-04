import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import NewsroomCards from "../components/NewsroomCards";

function newsroomPage() {
  const newsroomItems = [
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
          <Typography sx={{ fontSize: 60, fontWeight: 700 }}>
            News
            <Box component="span" sx={{ color: "#12A551" }}>
              room
            </Box>
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

        <Typography
          my={4}
          sx={{ fontSize: 32, fontWeight: 700, color: "#2A6498" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Ipsum has been the industry's standard{" "}
        </Typography>

        <Grid container spacing={4} my={6} alignItems={"center"}>
          {/* inner grid 1 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src={"/assets/newsroom/main.svg"}
              style={{
                width: "100%",
                maxWidth: "843px",
                maxHeight: "465px",
                borderRadius: 24,
              }}
            />
          </Grid>
          {/* inner grid 2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ fontSize: 20, textAlign: "justify" }}>
              The organisation has come a long way since its humble beginnings
              in 1993 when it was presented as a gift by our Founder, Syed
              Humayun Kabir, to the patron Sajida Humayun Kabir to mark their
              25th wedding anniversary. Syed Humayun Kabir served as SAJIDA’s
              Chairperson for almost two decades and also as board member of
              Renata Limited. The organisation has come a long way since its
              humble beginnings in 1993 when it was presented as a gift by our
              Founder, Syed Humayun Kabir, to the patron Sajida Humayun Kabir to
              mark their 25th wedding anniversary. Syed Humayun Kabir served as
              SAJIDA’s Chairperson for almost two decades and also as board
              member of Renata Limited.{" "}
            </Typography>
          </Grid>
        </Grid>

        <Typography sx={{ fontSize: 28, mt: 6 }}>All News & Blogs</Typography>
        <Grid container spacing={2} mb={6} >
          {newsroomItems.map((item, index) => (
            <Grid key={index} size={{ md: 3, xs: 12 }}>
              <NewsroomCards
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

export default newsroomPage;
