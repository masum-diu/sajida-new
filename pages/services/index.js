import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import AirlineSeatFlatAngledOutlinedIcon from "@mui/icons-material/AirlineSeatFlatAngledOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import ServiceCards from "../components/ServiceCards";
import { useRouter } from "next/router";
import instance from "../api/api_instance";
import { BeatLoader } from "react-spinners";

function servicePage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get("/pages/133");

      setData(response.data.body);
      setLoading(false);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => setServices(data));
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



  return (
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: { md: 60, xs: 40 }, fontWeight: 500 }}>
            Our <span style={{ color: "#12A551" }}>Services</span>
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
        {/* First Section */}
        <Grid container spacing={8} mt={8}>
          {/* first grid */}
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack>
              <Typography
                sx={{ color: "#0D5EAE", fontSize: 36, fontWeight: 700, mt: 2 }}
              >
                {data[1]?.data[0]?._mave?.title}
              </Typography>
              <Typography
                sx={{ color: "#222222", fontSize: 28 }}
              // dangerouslySetInnerHTML={{
              //   __html: data[1]?.data[0]?._mave?.description,
              // }}
              >{data[1]?.data[0]?._mave?.description.replace(/<[^>]+>/g, '')}</Typography>
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",
                  // mt: 6,
                  width: "100%",
                  maxWidth: 954,
                }}
                dangerouslySetInnerHTML={{
                  __html: data[1]?.data[0]?._mave?.altDescription,
                }}
              />

              {/* <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",
                  mt: 2,
                  width: "100%",
                  maxWidth: 954,
                }}
              >
                The organisation has come a long way since its humble beginnings
                in 1993 when it was presented as a gift by our Founder, Syed
                Humayun Kabir, to the patron Sajida Humayun Kabir to mark their
                25th wedding anniversary. Syed Humayun Kabir served as SAJIDA’s
                Chairperson for almost two decades and also as board member of
                Renata Limited.
              </Typography> */}
            </Stack>
          </Grid>
          {/* second grid */}
          <Grid size={{ md: 6, xs: 12 }}>
            {/* images */}
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }} mt={{ lg: 4, xl: 5 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[1]?.data[1]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16, height: 565, objectFit: "cover" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[1]?.data[2]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16, height: 565, objectFit: "cover" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Section */}

        {/* <Grid container spacing={8} mt={8}>

          <Grid size={{ md: 6, xs: 12 }}>
   
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[2]?.data[0]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16, height: 565, objectFit: "cover" }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} mt={{ lg: 4, xl: 5 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[2]?.data[1]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16, height: 565, objectFit: "cover" }}
                />
              </Grid>
            </Grid>
          </Grid>
         
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack>
              <Typography
                sx={{ color: "#0D5EAE", fontSize: 36, fontWeight: 700, mt: 2 }}
              >
                {data[2]?.data[2]?._mave?.title}
              </Typography>
              <Typography
                sx={{ color: "#222222", fontSize: 28 }}
              
              >{data[2]?.data[2]?._mave?.description.replace(/<[^>]+>/g, '')}</Typography>

              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",
                  // mt: 6,
                  width: "100%",
                  maxWidth: 954,
                }}
                dangerouslySetInnerHTML={{
                  __html: data[2]?.data[2]?._mave?.altDescription,
                }}
              />

              
            </Stack>
          </Grid>
        </Grid> */}
        {/* Our service section */}
        <Typography
          sx={{ color: "#0D5EAE", fontSize: 36, fontWeight: 700, mt: 5 }}
        >
          {data[3]?.data[0]?._mave?.title}
        </Typography>
        <Typography
          sx={{ color: "#222222", fontSize: 28 }}
        // dangerouslySetInnerHTML={{
        //   __html: data[3]?.data[0]?._mave?.description,
        // }}
        >{data[3]?.data[0]?._mave?.description.replace(/<[^>]+>/g, '')}</Typography>


        <Grid container spacing={3} mt={2} mb={6}>
          {services?.map((item, index) => (
            <Grid size={{ xs: 12, lg: 4, xl: 3 }} key={index}>
              <ServiceCards title={item.title} des={item.description} btn={item.button} iconItem={item.icon} slug={item.slug} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default servicePage;
