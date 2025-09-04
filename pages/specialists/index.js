import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import SpecialistCard from "../components/SpecialistCard";

function specialistsPage() {
  const router = useRouter();
  const specialistItems = [
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
      path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Akter ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-Akter",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
    {
      cardImg: "/assets/specialist/cardimg.svg",
      title: "Dr. Shaila Sabrin ",
      des: "Chief Dietitian",
      dig: "MBBS, MD (Cardiology)",
      btn: "View Profile",
      slug: "dr-shaila-sabrin",
       path:router.pathname
    },
  ];


  return (
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: 60, fontWeight: 500 }}>
            Our Dedicated <span style={{ color: "#12A551" }}>Specialists</span>
          </Typography>
          <Stack direction={"row"} spacing={1}  >
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
          src={"/assets/specialist/banner.svg"}
          width={"100%"}
          style={{ marginTop: "23px" }}
        />

        <Typography
          textAlign={"center"}
          sx={{ fontSize: 36, fontWeight: 700, color: "#2A6498", my: 2 }}
        >
          Our Dedicated Doctors Team
        </Typography>

        <Stack
          direction={{ md: "row", xs: "column" }}
          spacing={1}
          maxWidth={800}
          alignItems={"center"}
        >
          <Select
            fullWidth
            displayEmpty
            size="small"
            variant="outlined"
            defaultValue=""
            renderValue={(selected) => selected || "Select Department"}
            sx={{}}
          >
            <MenuItem value="" disabled>
              Select Department
            </MenuItem>
            <MenuItem value="dummy">Dummy</MenuItem>
            <MenuItem value="cardiology">Cardiology</MenuItem>
            <MenuItem value="neurology">Neurology</MenuItem>
          </Select>

          <TextField
            fullWidth
            size="small"
            placeholder="Enter your name"
            variant="outlined"
            required

          />

          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#2A6498",
              color: "white",
              px: 8,
              py: 1.5,
              "&:hover": {
                bgcolor: "#2A6498",
              },
              maxwidth: 106,
              borderRadius: 50,
              textTransform: "capitalize",
            }}
          >
            Submit
          </Button>
        </Stack>

        <Grid container spacing={2} my={6}>
          {specialistItems.map((item, index) => (
            <Grid size={{ md: 3, xs: 12 }} key={index}>
              <SpecialistCard
                title={item?.title}
                cardImg={item?.cardImg}
                des={item?.des}
                dig={item?.dig}
                btn={item?.btn}
                slug={item?.slug}
                path={item.path}

              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default specialistsPage;
