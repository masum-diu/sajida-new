import { Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function AboutHeroSection({
  image1,
  image2,
  title1,
  title2,
  subtitle1,
  subtitle2,
  description,
  image3,
  image4,
  title3,
  title4,
  des1,
  des2,
  button1,
  disable,
}) {
  const router = useRouter();
  return (
    <Grid container spacing={8} mt={6}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src={image1}
              style={{ width: "100%", maxWidth: 422, borderRadius: 16 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} mt={{ lg: 4, xl: 5 }}>
            <img
              src={image2}
              style={{ width: "100%", maxWidth: 421, borderRadius: 16 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          sx={{ fontSize: 36, fontWeight: 700, color: "#0D5EAE", pt: 4 }}
        >
          {title1}{" "}
          <span
            style={{ color: "#12A551" }}
            dangerouslySetInnerHTML={{ __html: title2 }}
          />
        </Typography>

        <Typography
          sx={{ fontSize: 28, lineHeight: 1.2, mt: 1.5 }}
          dangerouslySetInnerHTML={{ __html: subtitle1 }}
        />

        <Typography
          sx={{
            fontSize: 16,
            color: "#AAAAAA",
            textAlign: "justify",
            mt: 4,
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <Stack mt={4} spacing={4} direction={{ xs: "column", md: "row" }}>
          <Stack direction={"column"}>
            <Stack alignItems={"center"} direction={"row"} spacing={1}>
              <img src={image3} width={67} />
              <Typography sx={{ fontSize: 28, fontWeight: 500 }}>
                {title3}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: 16,
                color: "#AAAAAA",
                textAlign: "justify",
              }}
              dangerouslySetInnerHTML={{ __html: des1 }}
            />
          </Stack>

          {/* another one */}
          <Stack direction={"column"}>
            <Stack alignItems={"center"} direction={"row"} spacing={2}>
              <img src={image4} width={50} />
              <Typography sx={{ fontSize: 28, fontWeight: 500 }}>
                {title4}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: 16,
                color: "#AAAAAA",
                textAlign: "justify",
                mt: 2,
              }}
              dangerouslySetInnerHTML={{ __html: des2 }}
            />
          </Stack>
        </Stack>

        {disable === "/about" ? (
          ""
        ) : (
          <Button
            onClick={() => router.push("/about")}
            variant="contained"
            color="primary"
            sx={{
              width: 192.72,
              height: 57,
              fontWeight: 500,
              borderRadius: 100,
              fontSize: 16,
              marginTop: 4,
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
            {button1}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default AboutHeroSection;
