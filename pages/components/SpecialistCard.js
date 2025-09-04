import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function SpecialistCard({ cardImg, title, des, dig, btn, slug, path }) {
  const router = useRouter()
  return (
    <>
      <Paper
        sx={{ borderRadius: 3, width: "100%", maxWidth: 404, border: "1px solid #EAF0F5", boxShadow: '0px 2px 4px rgba(18, 165, 81, 0.05)', }}
      >
        <Stack alignItems={"center"}>
          <img src={cardImg} width={288} />
        </Stack>
        <Box px={3} mt={3}>
          <Typography sx={{ fontSize: 20, color: "#2A6498", fontWeight: "bold" }}>{title}</Typography>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography
              sx={{ fontSize: 16, color: "#12A551", fontWeight: 600 }}
            >
              {des}
            </Typography>
            <Typography sx={{ fontSize: 12, color: "#12A551" }}>
              {dig}
            </Typography>
          </Stack>
        </Box>

        <Stack alignItems={"center"} py={2} spacing={2} direction={"row"} justifyContent={"center"}>
          {path === "/specialists" ? "" : <Button
            variant="contained"
            size="small"
            onClick={() => router.push("/appointment")}
            sx={{
              bgcolor: "#2A6498",
              color: "white",
              px: 3,
              py: 0.5,
              // "&:hover": {
              //   bgcolor: "#12A551",
              // },
              maxwidth: 144,
              borderRadius: 100,
              textTransform: "capitalize",
            }}
          >
            Appointment
          </Button>}
          <Link href={`/specialists/${slug}`} passHref style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#12A551",
                color: "white",
                px: 3,
                py: 0.5,
                // "&:hover": {
                //   bgcolor: "#12A551",
                // },
                maxwidth: 144,
                borderRadius: 100,
                textTransform: "capitalize",
              }}
            >
              {btn}
            </Button>
          </Link>
        </Stack>

      </Paper>
    </>
  );
}

export default SpecialistCard;
