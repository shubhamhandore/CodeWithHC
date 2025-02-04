// src/components/Reviews.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import { Star } from '@mui/icons-material';

const reviews = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Innovators',
    review: 'The AI-powered Virtual CEO completely transformed our business strategy! Highly recommend it.',
    rating: 5,
    image: 'https://via.placeholder.com/100', // Placeholder image, replace with real one
  },
  {
    name: 'Jane Smith',
    role: 'Founder, StartSmart',
    review: 'Incredible insights and market predictions. The personalized consulting service is invaluable!',
    rating: 4,
    image: 'https://via.placeholder.com/100', // Placeholder image, replace with real one
  },
  {
    name: 'Raj Patel',
    role: 'Marketing Director, NextGen Solutions',
    review: 'A must-have for any startup. The competitor analysis feature alone is worth the subscription.',
    rating: 5,
    image: 'https://via.placeholder.com/100', // Placeholder image, replace with real one
  },
];

const Reviews = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom style={{ marginTop: '2rem' }}>
        What Our Clients Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Avatar src={review.image} alt={review.name} sx={{ width: 60, height: 60, marginRight: 2 }} />
                  <Box>
                    <Typography variant="h6" component="div" fontWeight="bold">
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {review.role}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" color="textPrimary" align="center" sx={{ marginTop: 2 }}>
                  &ldquo;{review.review}&rdquo;
                </Typography>

                <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} color={i < review.rating ? 'primary' : 'disabled'} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
