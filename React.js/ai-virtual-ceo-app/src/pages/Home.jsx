import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: '100px', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#212121', fontWeight: 'bold' }}>Welcome to the Future of Business</Typography>
        <Typography variant="h5" sx={{ marginTop: '20px' }}>
          Empowering startups with an AI-driven virtual CEO for smart decisions and market insights.
        </Typography>
        <Button component={Link} to="/services" variant="contained" sx={{ marginTop: '30px' }}>Explore Services</Button>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
