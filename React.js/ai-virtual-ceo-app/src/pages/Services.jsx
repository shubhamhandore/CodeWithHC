import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ServiceCard from '../components/ServiceCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  { title: 'Market Analysis', description: 'Get insights into market trends and competitors.' },
  { title: 'Strategic Planning', description: 'Create data-driven strategies for your business.' },
  { title: 'Financial Forecasting', description: 'Predict future financial performance with AI.' },
];

const Services = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>Our Services</Typography>
        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
