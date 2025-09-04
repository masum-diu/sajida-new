import { Drawer, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function ManagementTeam({ open, setOpen, data }) {
  return (
    <>
      <Drawer
        anchor="left"
        variant="temporary"
        PaperProps={{
          sx: {
            width: "100%",
            // maxWidth: 1400,
            // full height
            overflow: "hidden",
            height: "100vh",
            bgcolor: "#2A6498",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >

        <Stack direction={{ md: "row", xs: "column" }}  sx={{ width: "100vw", height: "100vh", overflow: "auto", }}  >
          <Stack
            direction={"row"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            display={{ xs: "flex", md: "none" }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", m: 2, color: "#000", bgcolor: "#fff" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <img src={data?.image} width={"100%"} height={"100%"} />

          <Stack
            direction={"column"}  >
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
              display={{ xs: "none", md: "flex" }}
            >
              <IconButton
                onClick={() => setOpen(false)}
                sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", m: 2, color: "#000", bgcolor: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>
            <Stack
              direction={"column"} spacing={4} mx={2.5} sx={{mt:{ xs: 3}}} >
              
              <Typography sx={{ fontSize: {md:100,xs:30}, fontWeight: 600, color: "#fff", }}>
                {data?.name}
              </Typography>

              <Typography sx={{ fontSize: {md:18,xs:16}, color: "#fff", lineHeight: 2,textAlign: "justify" }}>
                {data?.about}
              </Typography>
            </Stack>
          </Stack>
        </Stack>



      </Drawer>
    </>
  );
}

export default ManagementTeam;
