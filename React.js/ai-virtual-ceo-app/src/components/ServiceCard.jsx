import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@mui/material';

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{service.title}</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '20px' }}>
          {service.description}
        </Typography>
        <Button variant="contained">Learn More</Button>
      </CardContent>
    </Card>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;