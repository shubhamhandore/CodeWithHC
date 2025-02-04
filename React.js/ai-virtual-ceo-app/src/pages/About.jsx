import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ padding: '50px 0' }}>
        <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>About Us</Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Our AI-powered Virtual CEO is designed to help businesses make data-driven decisions and optimize their strategies for long-term success.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
