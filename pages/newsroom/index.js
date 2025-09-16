import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NewsroomCards from "../components/NewsroomCards";
import { BeatLoader } from "react-spinners";
import instance from "../api/api_instance";

function newsroomPage() {
  const [data, setData] = useState([]);
  console.log("about", data);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await instance.get("/pages/136");

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
          sx={{ fontSize: {md:32,xs:18}, fontWeight: 700, color: "#2A6498" }}
        >
          {data[0]?.data[0]?.value}
        </Typography>

        <Grid container spacing={4} my={6} alignItems={"center"}>
          {/* inner grid 1 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src={`https://sajedabackend.etherstaging.xyz/${data[0]?.data[1]?._mave?.file_path}`}
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
            <Typography
              sx={{ fontSize: 20, textAlign: "justify" }}
              dangerouslySetInnerHTML={{ __html: data[0]?.data[2]?.value }}
            />
          </Grid>
        </Grid>

        <Typography sx={{ fontSize: 28, mt: 6, mb: 2 }}>All News & Blogs</Typography>
        <Grid container spacing={2} mb={6}>

          {Array.isArray(data[1]?.data[0]?._mave?.cards
          ) &&
            data[1]?.data[0]?._mave?.cards.map((item, index) => (
              <Grid item key={index} size={{ xs: 12, md: 4, xl: 3 }}>
                <NewsroomCards
                  image={
                    item?.media_files?.file_path
                      ? `https://sajedabackend.etherstaging.xyz/${item?.media_files.file_path}`
                      : "/assets/stories/people.svg"
                  }
                  title={item?.title_en || ""}
                  description={item?.description_en || ""}

                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default newsroomPage;
