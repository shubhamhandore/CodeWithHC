import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#212121', padding: '20px', marginTop: '40px' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="white" align="center">
          © 2025 AI-powered Virtual CEO | All Rights Reserved
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Privacy Policy</Link>
          <Link href="#" color="inherit" sx={{ margin: '0 10px' }}>Terms of Service</Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
