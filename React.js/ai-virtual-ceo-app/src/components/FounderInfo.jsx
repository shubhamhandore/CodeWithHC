// src/components/FounderInfo.jsx
import React from 'react';
import { Container, Typography, Grid, Box, Avatar, Card, CardContent } from '@mui/material';

const FounderInfo = () => {
  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Meet Our Founder
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                {/* Founder Avatar */}
                <Avatar
                  src="https://via.placeholder.com/150" // Replace with the actual founder image
                  alt="Founder"
                  sx={{ width: 150, height: 150, marginBottom: 2 }}
                />

                {/* Founder Info */}
                <Typography variant="h5" fontWeight="bold">
                  Shubham Handore
                </Typography>
                <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                  Founder & CEO
                </Typography>

                {/* Founder Description */}
                <Typography variant="body2" color="textPrimary" align="center">
                  Shubham Handore is the visionary behind the AI-powered Virtual CEO for Startups & Businesses. With a passion for technology and entrepreneurship, he aims to make decision-making accessible and data-driven for businesses of all sizes. With a background in Computer Science and expertise in Full Stack Development, Shubham&apos;s mission is to revolutionize the way businesses operate and grow using cutting-edge AI technology.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FounderInfo;
