import { Box, Grid, Stack, Typography, Paper } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function Stories() {
  const router = useRouter();
  const { query } = router;
  const storyName = query.stories
    ? query.stories.split("-").join(" ")
    : "Not Found";

  return (
    <Box sx={{ width: "90%", maxWidth: "1500px", margin: "0 auto", my: 2 }}>
      <Stack justifyContent="center" alignItems="center">
        <Typography sx={{ fontSize: 60, fontWeight: 500 }}>
          Case <span style={{ color: "#12A551" }}>Stories</span>
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
            specialists
          </Typography>
          <img
            src="/assets/about/rightArrow.svg"
            width={14}
            alt="Right Arrow"
          />
          <Typography
            sx={{ fontSize: 16, color: "#AAAAAA", textTransform: "uppercase" }}
          >
            {storyName}
          </Typography>
        </Stack>
      </Stack>

      <img
        src="/assets/stories/banner2.svg"
        width="100%"
        alt="Case Stories Banner"
        style={{ marginTop: "23px" }}
      />

      <Grid container spacing={4} my={5} alignItems={"center"}>
        {/* inner grid 1 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack direction={"column"} spacing={5}>
            <Stack direction={"column"}>
              {" "}
              <Typography
                sx={{ color: "#2A6498", fontSize: 36, fontWeight: 700 }}
              >
                Dr. Shaila Sabrin
              </Typography>
              <Typography sx={{ color: "#222222", fontSize: 28 }}>
                Chief Dietitian MBBS, MD (Cardiology)
              </Typography>{" "}
            </Stack>

            <Typography
              sx={{
                color: "#222222",
                fontSize: 16,
                textAlign: "justify",

                width: "100%",
              }}
            >
              SAJIDA HOSPITAL is a value-driven, non-government organisation. It
              embodies the principle of corporate philanthropy, with 51%
              shareholding of Renata Ltd, one of the fastest growing
              pharmaceutical and animal health product companies in Bangladesh.
              The organisation, founded in 1993, aims to empower communities,
              catalyse entrepreneurship, build equity and establish enterprises
              for good with an overarching vision of ensuring health, happiness,
              and dignity for all. SAJIDA’s operations in Bangladesh have
              touched over 6 million individuals through its multi-sectoral
              development programmes which focus on poverty alleviation,
              community healthcare and climate change. It runs one of the
              largest financial service operations in Bangladesh and has
              specialised healthcare enterprises.
            </Typography>

            <Typography
              sx={{
                color: "#222222",
                fontSize: 16,
                textAlign: "justify",

                width: "100%",
                maxWidth: 600,
              }}
            >
              The organisation has come a long way since its humble beginnings
              in 1993 when it was presented as a gift by our Founder, Syed
              Humayun Kabir, to the patron Sajida Humayun Kabir to mark their
              25th wedding anniversary. Syed Humayun Kabir served as SAJIDA’s
              Chairperson for almost two decades and also as board member of
              Renata Limited.
            </Typography>
          </Stack>
        </Grid>
        {/* inner grid 2 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={"/assets/about/hospitalStory.svg"}
            style={{ width: "100%", maxWidth: "873px", maxHeight: "553px" }}
          />
        </Grid>
      </Grid>

      {/* Service Overview */}
      <Box sx={{ mt: 6 }}>
        <Typography fontSize={28} fontWeight={600} gutterBottom>
          Service Overview
        </Typography>
        <Typography sx={{ fontSize: 18, textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          varius turpis porttitor, tincidunt leo vel, euismod neque. Maecenas
          facilisis lacus ut nunc pretium luctus. Mauris malesuada eros ex,
          vitae suscipit metus pellentesque non. Aenean tincidunt posuere quam
          non vestibulum. Suspendisse nec diam mi. Nulla vitae convallis leo.
          Morbi ut turpis dui. Aenean urna justo, posuere in pellentesque et,
          porta vitae neque.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography
          component="li"
          sx={{ fontSize: 18, mb: 1, textAlign: "justify" }}
        >
          Etiam blandit felis justo, vel vulputate enim vulputate vulputate
          Aenean tincidunt posuere quam non vestibulum. Suspendisse nec diam mi.
          Nulla vitae convallis leo. Morbi ut turpis penatibus et
        </Typography>
        <Typography
          component="li"
          sx={{ fontSize: 18, mb: 1, textAlign: "justify" }}
        >
          As Nur had a promising prognosis with continued treatment, we
          contacted his parents and invited his father to join our project,
          assuring them. They gratefully accepted our offer to stay at the
          funds.
        </Typography>
        <Typography
          component="li"
          sx={{ fontSize: 18, mb: 1, textAlign: "justify" }}
        >
          He can now attend school without hesitation, maintain his hygiene, and
          focus on his studies,” shares Nur’s parents, holding onto hope shine
          for their son. Nur’s battle with Acute.
        </Typography>
        <Typography component="li" sx={{ fontSize: 18, textAlign: "justify" }}>
          After hearing about Nur’s situation from Dr. Diba in DMCH’s
          Haematology-Oncology Department, SAJIDA Hospital’s Childhood Cancer
          Project Nur’s battle with Acute Lymphoblastic Leukaemia.
        </Typography>
      </Box>

      {/* Health Care Plans */}
      <Box sx={{ mt: 4 }}>
        <Typography fontSize={28} fontWeight={600} gutterBottom>
          Health Care Plans
        </Typography>
        <Typography sx={{ fontSize: 18, textAlign: "justify" }}>
          Cras lacinia sit amet elit eu accumsan. Vestibulum auctor nec metus a
          sodales. Proin dapibus sem vel ipsum accumsan congue. Quisque laoreet
          orci diam, non tincidunt massa finibus nec. Morbi turpis elit, aliquam
          imperdiet semper eu, semper vel diam.Cras lacinia sit amet elit eu
          accumsan. Vestibulum auctor nec metus a sodales. Proin dapibus sem vel
          ipsum accumsan congue. Quisque laoreet orci diam, non tincidunt massa
          finibus nec. Morbi turpis elit, aliquam imperdiet semper eu, semper
          vel diam. He can now attend school without hesitation, maintain his
          hygiene, and focus on his studies," shares Nur’s parents, holding onto
          hope that life will shine for their son. Nur’s battle with Acute
          Lymphoblastic Leukaemia (ALL) and his parents’ unwavering strength
          stand as a heartwarming example of their boundless love and
          unbreakable willpower.
        </Typography>
      </Box>

      {/* Advantages */}
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography fontSize={28} fontWeight={600} gutterBottom>
          Advantages
        </Typography>
        <Typography sx={{ fontSize: 18, textAlign: "justify" }}>
          Donec commodo arcu porttitor neque convallis tincidunt. Proin viverra
          consectetur odio, a imperdiet turpis malesuada eu. Maecenas quis
          turpis a nisl pulvinar convallis vitae sed metus. Aliquam eget
          porttitor erat. Nullam placerat, tellus eu eleifend ultricies, turpis
          augue rutrum justo, ut molestie purus lacus ut magna. Overwhelmed and
          relieved, Nur’s parents saw our offer as an answered prayer. Lacking
          even the funds to rent a place in Dhaka for his initial chemotherapy
          phase, they gratefully accepted our offer to stay at our
          hospital-rented residence in Keranigonj. It became a beacon of hope
          amidst their despair.Overwhelmed and relieved, Nur’s parents saw our
          offer as an answered prayer. Lacking even the funds to rent a place in
          Dhaka for his initial chemotherapy phase, they gratefully accepted our
          offer to stay at our hospital-rented residence in Keranigonj. It
          became a beacon of hope amidst their despair.Overwhelmed and relieved,
          Nur’s parents saw our offer as an answered prayer. Lacking even the
          funds to rent a place in Dhaka for his initial chemotherapy phase,
          they gratefully accepted our offer to stay at our hospital-rented
          residence in Keranigonj. It became a beacon of hope amidst their
          despair.
        </Typography>
      </Box>
    </Box>
  );
}

export default Stories;
