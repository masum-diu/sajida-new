// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',backgroundColor:"#F9F9F9" }}>
      <Header />
      <Box sx={{ flex: 1,}}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
