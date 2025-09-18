// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container, IconButton, keyframes } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Layout({ children }) {

  const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: "#F9F9F9" }}>
      <Header />
      <Box sx={{ flex: 1, }}>
        {children}
        <IconButton
          aria-label="whatsapp"
          href="https://wa.me/8801777772500" 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: '#25D366',
            color: '#fff',
            boxShadow: 3,
            animation: `${pulse} 1.5s infinite`,
            '&:hover': {
              backgroundColor: '#1EBE57',
            },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
