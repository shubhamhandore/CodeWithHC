// src/pages/Career.jsx
import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const Career = () => {
  const jobPositions = [
    {
      title: 'Full Stack Developer',
      description: 'Join our dynamic team to build the next generation of AI-powered web applications.',
      requirements: ['MERN Stack expertise', '3+ years of experience', 'Strong problem-solving skills'],
      location: 'Remote',
    },
    {
      title: 'AI/ML Engineer',
      description: 'Work on groundbreaking AI models to revolutionize business strategies for startups.',
      requirements: ['Experience in AI/ML frameworks', 'Good knowledge of NLP', 'Python, TensorFlow'],
      location: 'Hybrid (Office + Remote)',
    },
    {
      title: 'Business Analyst',
      description: 'Help shape AI models by analyzing market trends and business requirements.',
      requirements: ['Experience in business analysis', 'Strong communication skills', 'Familiarity with AI concepts'],
      location: 'Remote',
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" style={{ marginTop: '2rem' }}>
        Join Our Team
      </Typography>
      
      <Typography variant="h5" align="center" paragraph>
        We&apos;re always on the lookout for talented individuals who can help us shape the future of business strategies through AI. Check out the open positions below.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {jobPositions.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {job.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Requirements:</strong>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Location:</strong> {job.location}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  href="mailto:careers@cerebroceo.com?subject=Application for {job.title}"
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Career;
