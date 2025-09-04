import { Box, Grid, Stack, Typography, Paper } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function newsroom() {
  const router = useRouter();
  const { query } = router;
  const storyName = query.stories
    ? query.stories.split("-").join(" ")
    : "Not Found";

  return (
    <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
      <Stack justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: 60, fontWeight: 700 }}>
          News
          <Box component="span" sx={{ color: "#12A551" }}>
            room
          </Box>
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography sx={{ fontSize: 16, color: "#AAAAAA" }}>HOME</Typography>
          <img
            src="/assets/about/rightArrow.svg"
            width={14}
            alt="Right Arrow"
          />
          <Typography
            sx={{ fontSize: 16, color: "#AAAAAA", textTransform: "uppercase" }}
          >
            Newsroom
          </Typography>
          <img
            src="/assets/about/rightArrow.svg"
            width={14}
            alt="Right Arrow"
          />
          <Typography
            sx={{
              fontSize: 16,
              color: "#AAAAAA",
              textTransform: "uppercase",
            }}
          >
            {router?.query.newsroom
              ? router.query.newsroom.split("-").join(" ")
              : "Not Found"}
          </Typography>
        </Stack>
      </Stack>

      <img
        src="/assets/newsroom/banner.svg"
        width="100%"
        alt="Case Stories Banner"
        style={{ marginTop: "23px" }}
      />

      {/* the next section */}
      <Typography
        sx={{
          color: "#2A6498",
          fontSize: 36,
          fontWeight: 700,
          my: 5,
          textTransform: "uppercase",
        }}
      >
        All News & BlogsAll News & Blogs
      </Typography>

      <Typography my={5} fontSize={28}>
        Service Overview
      </Typography>

      <Typography
        sx={{
          color: "#222222",
          fontSize: 16,
          textAlign: "justify",
          mb: 4,
          width: "100%",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius
        turpis porttitor, fringilla leo vel, euismod neque. Nascenas facilisis
        locus ut nunc pretium luctus. Mauris malesuada eros ex, vitae suscipit
        metus pellentesque nec. Aenean tincidunt posuere quam non vestibulum.
        Suspendisse nec diam mi. Nulla vitae convallis ise. Morbi ut turpis dui.
        Aenean arma justo, posuere in pellentesque et, porta vitae neque.
      </Typography>

      <Box component="ul" sx={{ pl: 4, mb: 4 }}>
        <Typography
          component="li"
          sx={{ fontSize: 16, color: "#222222", mb: 1 }}
        >
          Etiam blandit felis justo, vel vulputate enim vulputate vulputate
        </Typography>
        <Typography
          component="li"
          sx={{ fontSize: 16, color: "#222222", mb: 1 }}
        >
          Ord varius netaque penatibus et magnis dis parturient mentes
        </Typography>
        <Typography
          component="li"
          sx={{ fontSize: 16, color: "#222222", mb: 1 }}
        >
          Nascenas vitae lectus o orci tristique sollicitudin eos sed nisi
        </Typography>
        <Typography
          component="li"
          sx={{ fontSize: 16, color: "#222222", mb: 1 }}
        >
          Nullam elit ligula, sodales sed mauris nt, cursus porttitor est
        </Typography>
      </Box>

      <Grid container spacing={5} py={1}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                mb: 3,
              }}
            >
              Advantages
            </Typography>

            <Typography
              sx={{
                color: "#222222",
                fontSize: 18,
                textAlign: "justify",

                mb: 4,
                width: "100%",
                maxWidth: 1200,
              }}
            >
              Donec commodo ercu porttitor neque convallis tincidunt. Proin
              viverra consectetur odio, ci imperdiet turpis malesuada eu.
              Nascenas quis turpis o nisi pulvinar convallis vitae sed massa.
              Aliquam eget por minus erus.
            </Typography>

            <Typography
              sx={{
                color: "#222222",
                fontSize: 18,
                textAlign: "justify",
                mb: 4,
                width: "100%",
                maxWidth: 1200,
              }}
            >
              Nullam placerat, tellus eu eleifend ultricies, turpis augue rutrum
              justo, ut molestie purus locus ut magna.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Stack direction={"column"}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 700,
                mb: 3,
              }}
            >
              Health Care Plans
            </Typography>

            <Typography
              sx={{
                color: "#222222",
                fontSize: 18,
                textAlign: "justify",
                mb: 4,
                width: "100%",
                maxWidth: 1200,
              }}
            >
              Cros kocino sit amet elit eu occumsan. Vestibulum auctor nec metus
              e sodales. Proin dignissim sem vel ipsum occumsan congue. Quisque
              looreet orci diam, non fringilla massa fusius nec. Horbi turpis
              elit, aliquam imperdiet tempor eu, semper vel diam.Cros kocino sit
              amet elit eu occumsan. Vestibulum auctor nec metus e sodales.
              Proin dignissim sem vel ipsum occumsan congue. Quisque looreet
              orci diam, non fringilla massa fusius nec. Horbi turpis elit,
              aliquam imperdiet tempor eu, semper vel diam.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default newsroom;
