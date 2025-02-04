// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Grid, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here, such as sending an email or saving the form data
    alert('Thank you for reaching out! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" style={{ marginTop: '2rem' }}>
        Contact Us
      </Typography>

      <Typography variant="h5" align="center" paragraph>
        If you have any questions or inquiries, feel free to reach out to us using the form below. We&apos;re here to help!
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              boxShadow: 3,
              padding: 4,
              borderRadius: 2,
              backgroundColor: '#fff',
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h6">Alternatively, you can reach us at:</Typography>
        <Typography variant="body1" color="text.secondary">
          Email: contact@cerebroceo.com
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Phone: +1 (800) 123-4567
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Address: 123 Startup Lane, Innovation City, Techland
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
