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
  console.log("about", data);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get("/pages/133");

      setData(response.data.body);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const serviceCard = [
    {
      iconItem: MedicationOutlinedIcon,
      title: "Pharmacy Service",
      des: "Prescription and OTC medicines provided with professional guidance.",
      btn: "Learn More",
      slug: "pharmacy-service",
    },
    {
      iconItem: MedicalInformationOutlinedIcon,
      title: "Medical Specialist",
      des: "Connect with expert doctors across all major specializations.",
      btn: "Learn More",
      slug: "medical-specialist",
    },
    {
      iconItem: BiotechOutlinedIcon,
      title: "Diagnostic Services",
      des: "Lab and imaging tests for accurate medical diagnosis.",
      btn: "Learn More",
      slug: "diagnostic-services",
    },
    {
      iconItem: AirlineSeatFlatAngledOutlinedIcon,
      title: "General Surgery",
      des: "Expert surgical procedures with compassionate post-op care.",
      btn: "Learn More",
      slug: "general-surgery",
    },
    {
      iconItem: AccessibilityNewOutlinedIcon,
      title: "Orthopedic",
      des: "Bone and joint care including sports injuries and arthritis.",
      btn: "Learn More",
      slug: "orthopedic",
    },
    {
      iconItem: ChildCareOutlinedIcon,
      title: "Mother and Child Care",
      des: "Maternity, neonatal, and pediatric care under one roof.",
      btn: "Learn More",
      slug: "mother-child-care",
    },
    {
      iconItem: LocalHospitalOutlinedIcon,
      title: "Hospital Services",
      des: "24/7 emergency, inpatient, and surgical hospital support.",
      btn: "Learn More",
      slug: "hospital-services",
    },
    {
      iconItem: HealthAndSafetyOutlinedIcon,
      title: "Health and Safety",
      des: "Wellness checkups and workplace safety consultations.",
      btn: "Learn More",
      slug: "health-safety",
    },
    {
      iconItem: VaccinesOutlinedIcon,
      title: "Vaccination",
      des: "Routine and travel vaccines for all age groups.",
      btn: "Learn More",
      slug: "vaccination",
    },
    {
      iconItem: BloodtypeOutlinedIcon,
      title: "Blood Services",
      des: "Safe blood donation, screening, and transfusion support.",
      btn: "Learn More",
      slug: "blood-services",
    },
    {
      iconItem: PsychologyOutlinedIcon,
      title: "Mental Health",
      des: "Confidential therapy, counseling, and mental wellness care.",
      btn: "Learn More",
      slug: "mental-health",
    },
    {
      iconItem: MedicalServicesOutlinedIcon,
      title: "General Checkup",
      des: "Routine health screening for disease prevention and wellness.",
      btn: "Learn More",
      slug: "general-checkup",
    },
  ];

  return (
    <>
      <Box sx={{ width: "90%", maxWidth: "1720px", margin: "0 auto", my: 2 }}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ fontSize: 60, fontWeight: 500 }}>
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
          style={{ marginTop: "23px" }}
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
                dangerouslySetInnerHTML={{
                  __html: data[1]?.data[0]?._mave?.description,
                }}
              />
              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",
                  mt: 6,
                  width: "100%",
                  maxWidth: 954,
                }}
                dangerouslySetInnerHTML={{
                  __html: data[1]?.data[0]?._mave?.altDescription,
                }}
              />

              <Typography
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
              </Typography>
            </Stack>
          </Grid>
          {/* second grid */}
          <Grid size={{ md: 6, xs: 12 }}>
            {/* images */}
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }} mt={{ lg: 4, xl: 5 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[1]?.data[1]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16 }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[1]?.data[2]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Section */}

        <Grid container spacing={8} mt={8}>
          {/* first grid */}
          <Grid size={{ md: 6, xs: 12 }}>
            {/* images */}
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[2]?.data[0]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16 }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} mt={{ lg: 4, xl: 5 }}>
                <img
                  src={`https://sajedabackend.etherstaging.xyz/${data[2]?.data[1]?._mave?.file_path}`}
                  style={{ width: "100%", maxWidth: 350, borderRadius: 16 }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* second grid */}
          <Grid size={{ md: 6, xs: 12 }}>
            <Stack>
              <Typography
                sx={{ color: "#0D5EAE", fontSize: 36, fontWeight: 700, mt: 2 }}
              >
                {data[2]?.data[2]?._mave?.title}
              </Typography>
              <Typography
                sx={{ color: "#222222", fontSize: 28 }}
                dangerouslySetInnerHTML={{
                  __html: data[2]?.data[2]?._mave?.description,
                }}
              />

              <Typography
                sx={{
                  color: "#222222",
                  fontSize: 16,
                  textAlign: "justify",
                  mt: 6,
                  width: "100%",
                  maxWidth: 954,
                }}
                dangerouslySetInnerHTML={{
                  __html: data[2]?.data[2]?._mave?.altDescription,
                }}
              />

              <Typography
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
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        {/* Our service section */}
        <Typography
          sx={{ color: "#0D5EAE", fontSize: 36, fontWeight: 700, mt: 5 }}
        >
            {data[3]?.data[0]?._mave?.title}
        </Typography>
      <Typography
  sx={{ color: "#222222", fontSize: 28 }}
  dangerouslySetInnerHTML={{
    __html: data[3]?.data[0]?._mave?.description,
  }}
/>


        <Grid container spacing={3} py={10}>
          {serviceCard.map((service, index) => (
            <Grid size={{ md: 3, xs: 12 }} key={index}>
              <ServiceCards {...service} slug={service.slug} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default servicePage;
