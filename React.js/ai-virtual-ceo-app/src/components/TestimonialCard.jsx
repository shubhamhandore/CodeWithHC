// src/components/Testimonial.jsx
import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Avatar } from '@mui/material';
import { Star } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Alice Smith',
    position: 'CEO, Tech Innovators',
    feedback:
      'The AI-powered Virtual CEO transformed our decision-making process! The market predictions and business strategies suggested by the system have boosted our growth and helped us stay ahead of competitors.',
    // Replace with actual images
    avatar: 'https://via.placeholder.com/150',
    rating: 5,
  },
  {
    name: 'John Doe',
    position: 'Founder, GreenTech Solutions',
    feedback:
      'Cerebro CEO has revolutionized how we approach business challenges. The system\'s insights and strategy suggestions have been game-changing for us.',
    // Replace with actual images
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
  },
  {
    name: 'Sara Lee',
    position: 'Co-Founder, InnovateX',
    feedback:
      'We’re amazed at how quickly the AI-powered CEO adapts to market changes. It’s like having a team of experts guiding us through every decision!',
    avatar: 'https://via.placeholder.com/150', // Replace with actual images
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        What Our Clients Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {/* Testimonial Avatar */}
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                  />
                  {/* Testimonial Name & Position */}
                  <Typography variant="h5" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.position}
                  </Typography>

                  {/* Testimonial Feedback */}
                  <Typography variant="body1" color="textPrimary" align="center" sx={{ marginTop: 2 }}>
                    &quot;{testimonial.feedback}&quot;
                  </Typography>

                  {/* Rating */}
                  <Box display="flex" justifyContent="center" sx={{ marginTop: 1 }}>
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} sx={{ color: '#f39c12' }} />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
