import React, { useState } from 'react';
import { Box, Toolbar, Typography, Paper, Stack, Button, IconButton, Drawer, Menu, MenuItem, Divider } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { ExpandMore } from '@mui/icons-material';
import { useRouter } from 'next/router';
import SearchComponents from './SearchComponents';
function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const opens = Boolean(anchorEl);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang) => {
    if (lang) {
      console.log('Selected Language:', lang);
    }
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        mt: { xs: 1, sm: 1, md: 2, },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        flexDirection: 'column',
        gap: 1,

      }}
    >

      <Paper
        // elevation={4}
        sx={{
          width: '90%',
          maxWidth: '1720px',
          mx: 'auto',
          borderRadius: 100,
          backgroundColor: '#ffff',
          color: '#000',
          boxShadow: '0px 2px 4px rgba(18, 165, 81, 0.05)',
          height: { md: 90, xs: 80 },
          display: 'flex',
          alignItems: 'center',

        }}
      >
        <Toolbar sx={{ width: '100%', }}>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: '100%', px: { xs: 1.5, md: 0 } }}>
            <Stack direction={"row"} spacing={5} sx={{ width: '100%' }} alignItems={"center"}>
              <img src="/assets/images/Logo.svg" alt="" width={136} height={48} onClick={() => router.push("/")} style={{ cursor: 'pointer' }} />
              <Stack sx={{ display: { xs: "none", md: "block" } }}> <img src="/assets/images/hospital.svg" alt="" width={73} height={48} /></Stack>

            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"} width={"100%"} justifyContent={"flex-end"}>
              <Button
                variant="outlined"
                onClick={() => { router.push("/contact"); setOpen(false) }}


                sx={{
                  width: 130,
                  height: 50,
                  fontWeight: 600,
                  display: { xs: "none", md: "block" },
                  fontSize: 16,
                  border: "1px solid #EAF0F5",
                  borderRadius: 100,
                  textTransform: 'capitalize',
                  p: 1,
                  borderColor: '#EAF0F5',
                  color: '#2A6498',
                  '&:hover': {
                    borderColor: '#EAF0F5',
                    backgroundColor: 'rgba(234, 240, 245, 0.1)',


                  },
                }}
              >

                Ambulance


              </Button>

              <Button variant="outlined"
                onClick={() => { router.push("/contact"); setOpen(false) }}
                sx={{
                  width: 166,
                  height: 50,
                  fontWeight: 600,
                  fontSize: 16,
                  border: "1px solid #EAF0F5",
                  display: { xs: "none", md: "block" },
                  borderRadius: 100,
                  textTransform: 'capitalize',
                  p: 1,
                  borderColor: '#EAF0F5',
                  color: '#2A6498',
                  '&:hover': {
                    borderColor: '#EAF0F5',
                    backgroundColor: 'rgba(234, 240, 245, 0.1)',

                  },
                }}>
                emergency call
              </Button>
              <Button
                onClick={() => { router.push("/appointment"); setOpen(false) }}
                variant="contained"
                sx={{
                  width: 145,
                  height: 50,
                  fontWeight: 500,
                  display: { xs: "none", md: "block" },
                  borderRadius: 100,
                  fontSize: 16,
                  textTransform: 'capitalize',
                  p: 1,
                  backgroundColor: '#2A6498', // ✅ Initial background color set
                  color: '#fff', // ✅ Text color
                  '&:hover': {
                    backgroundColor: '#2A6498', // ✅ Keep same on hover
                    boxShadow: 'none',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                  '&:focus-visible': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                appointment
              </Button>

              <Button variant="contained"
                onClick={handleClick}
                sx={{
                  width: 76,
                  height: 47,
                  fontWeight: 500,
                  borderRadius: 100,
                  display: { xs: "none", md: "flex" },
                  fontSize: 16,
                  textTransform: 'capitalize',
                  p: 1,
                  backgroundColor: '#12A551', // ✅ Initial background color set
                  color: '#fff', // ✅ Text color
                  '&:hover': {
                    backgroundColor: '#12A551', // ✅ Keep same on hover
                    boxShadow: 'none',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                  '&:focus-visible': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }} endIcon={<ExpandMore />}>
                eng
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={opens}
                onClose={() => handleClose()}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
                <MenuItem onClick={() => handleClose('bn')}>বাংলা</MenuItem>
              </Menu>
              <Stack aria-label="" sx={{ display: { md: "none", xs: "block", }, cursor: "pointer" }} onClick={() => setOpen(true)} >
                <img src="/assets/Home/Menubar.svg" alt="" />
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </Paper>
      <Paper
        // elevation={4}
        sx={{
          width: '90%',
          maxWidth: '1720px',
          display: { xs: "none", md: "flex" },
          mx: 'auto',
          borderRadius: 100,
          backgroundColor: '#2A6498',
          color: '#000',
          boxShadow: '0px 2px 4px rgba(18, 165, 81, 0.05)',
          height: 60,
          alignItems: 'center',

        }}
      >
        <Toolbar sx={{ width: '100%' }}>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ width: '100%' }}>
            <Stack direction={"row"} sx={{ width: '100%' }} alignItems={"center"} justifyContent={"space-between"}>
              <Typography color="initial" fontSize={18} onClick={() => router.push("/")} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>Home</Typography>
              <Typography color="initial" fontSize={18} onClick={() => router.push("/about")} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>About Us</Typography>
              <Typography color="initial" fontSize={18} onClick={() => router.push("/services")} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>Our Services</Typography>
              <Typography color="initial" fontSize={18} onClick={() => router.push("/specialists")} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>Specialists</Typography>
              <Typography color="initial" fontSize={18} onClick={() => router.push("/stories")} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>Case Stories</Typography>
              <Typography color="initial" fontSize={18} onClick={() => router.push("/newsroom")} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>Newsroom</Typography>
              <Typography color="initial" onClick={() => router.push("/contact")} fontSize={18} sx={{
                color: "#ffff", fontWeight: 600, cursor: "pointer", border: "1px solid #005BAA",
                borderRadius: 100,
                borderColor: '#005BAA', px: 3
              }}>Contact Us</Typography>
              <img src="/assets/images/search.svg" onClick={() => setSearchOpen(true)} alt="" width={30} height={30} style={{ cursor: "pointer" }} />
            </Stack>

          </Stack>
        </Toolbar>
      </Paper>
      <SearchComponents open={searchOpen} setOpen={setSearchOpen} />
      <Drawer anchor="left" variant="temporary" sx={{ display: { md: "none", xs: "block" } }}
        PaperProps={{
          sx: {
            width: '90%',
            maxWidth: 320,
            height: '100vh', // full height
            overflow: 'hidden'

          },
        }} open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            height: '100%',
            overflowY: 'auto',
            p: 3,
          }}
        >
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} mb={3}>
            <img src="/assets/images/Logo.svg" alt="" width={120} height={48} />
            <IconButton onClick={() => setOpen(false)} sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <MenuItem onClick={() => { router.push("/"); setOpen(false) }} sx={{ p: 0, fontWeight: 700 }}>Home</MenuItem>
          <Divider />
          <MenuItem onClick={() => { router.push("/about"); setOpen(false) }} sx={{ p: 0, fontWeight: 700 }}>About Us</MenuItem>
          <Divider />
          <MenuItem onClick={() => { router.push("/services"); setOpen(false) }} sx={{ p: 0, fontWeight: 700 }}>Our Services</MenuItem>
          <Divider />
          <MenuItem onClick={() => { router.push("/specialists"); setOpen(false) }} sx={{ p: 0, fontWeight: 700 }}>Specialists</MenuItem>
          <Divider />
          <MenuItem onClick={() => { router.push("/stories"); setOpen(false) }} sx={{ p: 0, fontWeight: 700 }}>Case Stories</MenuItem>
          <Divider />
          <MenuItem sx={{ p: 0, fontWeight: 700 }}>Newsroom</MenuItem>
          <Divider />
          <MenuItem sx={{ p: 0, fontWeight: 700 }}>Contact Us</MenuItem>
          <Divider />
          <MenuItem sx={{ p: 0, fontWeight: 700 }} onClick={() => {
            setSearchOpen(true)
            setOpen(false)
          }}> <img src="/assets/images/search.svg" alt="" width={30} height={30} style={{ cursor: "pointer" }} /> </MenuItem>
          <Divider />
          <Stack direction={"column"} spacing={1} >
            <Button
              variant="outlined"
              onClick={() => { router.push("/contact"); setOpen(false) }}
              size='small'
              sx={{
                // width: 130,
                // height: 50,
                fontWeight: 600,

                fontSize: 16,
                border: "1px solid #EAF0F5",
                borderRadius: 100,
                textTransform: 'capitalize',
                p: 1,
                borderColor: '#EAF0F5',
                color: '#2A6498',
                '&:hover': {
                  borderColor: '#EAF0F5',
                  backgroundColor: 'rgba(234, 240, 245, 0.1)',


                },
              }}
            >

              Ambulance


            </Button>
            <Divider />
            <Button variant="outlined"
            onClick={() => { router.push("/contact"); setOpen(false) }}
              size='small'
              sx={{
                // width: 166,

                // height: 50,
                fontWeight: 600,
                fontSize: 16,
                border: "1px solid #EAF0F5",

                borderRadius: 100,
                textTransform: 'capitalize',
                p: 1,
                borderColor: '#EAF0F5',
                color: '#2A6498',
                '&:hover': {
                  borderColor: '#EAF0F5',
                  backgroundColor: 'rgba(234, 240, 245, 0.1)',

                },
              }}>
              emergency call
            </Button>
            <Divider />
            <Button
              size='small'
              variant="contained"
              onClick={() => { router.push("/appointment"); setOpen(false) }}
              sx={{
                // width: 145,
                // height: 50,
                fontWeight: 500,

                borderRadius: 100,
                fontSize: 16,
                textTransform: 'capitalize',
                p: 1,
                backgroundColor: '#2A6498', // ✅ Initial background color set
                color: '#fff', // ✅ Text color
                '&:hover': {
                  backgroundColor: '#2A6498', // ✅ Keep same on hover
                  boxShadow: 'none',
                },
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                '&:focus-visible': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            >
              appointment
            </Button>
            <Divider />
            <Button size='small' variant="contained"
              onClick={handleClick}
              sx={{
                // width: 76,
                // height: 47,
                fontWeight: 500,
                borderRadius: 100,

                fontSize: 16,
                textTransform: 'capitalize',
                p: 1,
                backgroundColor: '#12A551', // ✅ Initial background color set
                color: '#fff', // ✅ Text color
                '&:hover': {
                  backgroundColor: '#12A551', // ✅ Keep same on hover
                  boxShadow: 'none',
                },
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                '&:focus-visible': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }} endIcon={<ExpandMore />}>
              eng
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={opens}
              onClose={() => handleClose()}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
              <MenuItem onClick={() => handleClose('bn')}>বাংলা</MenuItem>
            </Menu>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Header;
