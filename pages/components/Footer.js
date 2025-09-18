import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

function Footer() {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          width: "90%",
          maxWidth: "1720px",
          mx: "auto",
          my: 3,
        }}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <img src="/assets/images/Logo.svg" alt="" width={194} />
          <Typography
            variant="body1"
            color="#AAAAAA"
            sx={{ fontSize: 14 }}
            mt={2}
          >
           At SAJIDA, patients experience a clean, caring, and patient-friendly clinical environment, supported by a team of expert doctors, nurses, and medical professionals who provide comprehensive services—including emergency care, surgery, diagnostics, pathology, and specialty care—all under one roof.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h6" fontWeight={600} color="#222222">
            Contact
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 16 }} mt={2}>
            Mob: +880 1777-772500<br></br>
            {/* Tel: 00000000<br></br> */}
            Jhony Tower,
            Chatgaon, Keraniganj<br></br>
            Highway Rd, Keraniganj<br></br>
            1310
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h6" fontWeight={600} color="#222222">
            Quicklinks
          </Typography>

          <Link
            href="/about"
            style={{
              textDecoration: "none",
              listStyle:"none",
              cursor: "pointer",
              color: "black",
            }}
          >
            <li>About</li>
          </Link>
          {/* <Link
            href="#"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
          >
            <li>Career</li>
          </Link> */}
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
               listStyle:"none",
              cursor: "pointer",
              color: "black",
            }}
          >
            <li>Contact</li>
          </Link>
          <Link
            href="/services"
            style={{
              textDecoration: "none",
               listStyle:"none",
              cursor: "pointer",
              color: "black",
            }}
          >
            <li>Services</li>
          </Link>
          {/* <Link
            href="#"
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "black",
            }}
          >
            <li>Department</li>
          </Link> */}
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h6" fontWeight={600} color="#222222">
            Resources{" "}
          </Typography>
          <Box sx={{ listStyle: "none" }}>
            <Link
              href="/stories"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              <li>Case stories</li>
            </Link>
            <Link
              href="/specialists"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              <li>Specialists</li>
            </Link>
            {/* <Link
              href="#"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              <li>Press Files</li>
            </Link> */}
            {/* <Link
              href="#"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              <li>FAQs</li>
            </Link> */}
            {/* <Link
              href="#"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "black",
              }}
            >
              <li>Contact</li>
            </Link> */}
          </Box>
        </Grid>

        <Grid size={3}></Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={{ md: 5, xs: 2 }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link  href="https://www.sajida.org/" target="_blank" style={{textDecoration:"none"}}  rel="noopener noreferrer"><Typography fontSize={14}  color="#2A6498" textAlign={"center"}>
              Visit Sajida Foundation Website
            </Typography></Link>
            <img src="/assets/images/Logo 1.svg" alt="" width={142} />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Stack direction={"row"} spacing={1}>
            <img src="/assets/images/Component 50.svg" width={40} alt="" />
            <img src="/assets/images/Component 49.svg" width={40} alt="" />
            <img src="/assets/images/Component 48.svg" width={40} alt="" />
            <img src="/assets/images/Component 47.svg" width={40} alt="" />
            <img src="/assets/images/Component 46.svg" width={40} alt="" />
          </Stack>
        </Grid>
      </Grid>
      <hr
        style={{
          backgroundColor: "#F0F0F0",
          height: "2px",
          border: "none",
        }}
      />
      <Typography
        fontSize={14}
        fontWeight={500}
        textAlign={{ md: "center", xs: "left" }}
        px={2}
        my={2}
      >
        ©2025 Sajida Hospital | All Rights Reserved. Design & Development{" "}
        <span style={{ color: "#2A6498", fontWeight: 700 }}>Ether Tech</span>
      </Typography>
    </Box>
  );
}

export default Footer;
