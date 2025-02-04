// src/pages/Pricing.jsx
import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Basic Plan',
      price: '$19.99/month',
      features: [
        'Basic business strategy advice',
        'Limited competitor analysis',
        'Market trend insights',
        'Email support'
      ],
    },
    {
      title: 'Pro Plan',
      price: '$49.99/month',
      features: [
        'Advanced business strategy advice',
        'In-depth competitor analysis',
        'Real-time market trend predictions',
        'Priority email support',
        'Access to exclusive resources'
      ],
    },
    {
      title: 'Enterprise Plan',
      price: '$99.99/month',
      features: [
        'Custom AI-driven business strategies',
        'Comprehensive competitor analysis',
        'Custom market insights',
        'Dedicated support',
        'White-glove onboarding service',
        'Personalized consulting sessions'
      ],
    },
  ];

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" style={{ marginTop: '2rem' }}>
        Pricing Plans
      </Typography>

      <Typography variant="h5" align="center" paragraph>
        Choose the plan that best fits your business needs. All plans come with a 7-day free trial.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, backgroundColor: '#fff' }}>
              <CardContent>
                <Typography variant="h5" component="div" align="center">
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="primary" align="center" sx={{ marginTop: 2 }}>
                  {plan.price}
                </Typography>
                <ul style={{ paddingLeft: '1rem', marginTop: '1rem' }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      <Typography variant="body1">{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', marginBottom: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ textTransform: 'none' }}
                >
                  Choose Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
