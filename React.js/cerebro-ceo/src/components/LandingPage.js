import React from 'react';
import { Button, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

// Styled components for the landing page
const HeroSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: 'linear-gradient(135deg, #00b4d8, #48c6ef)', // Gradient background
  textAlign: 'center',
  color: '#fff',
  padding: '40px',
});

const Title = styled(Typography)({
  fontSize: '3rem',
  fontWeight: '600',
  marginBottom: '20px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
});

const SubTitle = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '40px',
  fontWeight: '300',
});

const HeroButton = styled(Button)({
  padding: '12px 30px',
  fontSize: '1.2rem',
  fontWeight: '500',
  backgroundColor: '#fff',
  color: '#00b4d8',
  borderRadius: '30px',
  transition: '0.3s',
  '&:hover': {
    backgroundColor: '#00b4d8',
    color: '#fff',
  },
});

// Features Section (cards with icons)
const FeaturesSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '50px 0',
  flexWrap: 'wrap',
});

const FeatureCard = styled(Box)({
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  width: '250px',
  textAlign: 'center',
  margin: '20px',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
  },
});

const FeatureTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '20px',
});

const FeatureDescription = styled(Typography)({
  fontSize: '1rem',
  color: '#555',
});

// Main Landing Page Component
function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title variant="h2">AI-Powered Virtual CEO</Title>
          <SubTitle variant="h5">
            Revolutionize your business with AI-driven strategies and insights.
          </SubTitle>
          <HeroButton variant="contained">Get Started</HeroButton>
        </motion.div>
      </HeroSection>

      {/* Features Section */}
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Key Features
        </Typography>
        <FeaturesSection>
          <FeatureCard component={motion.div} whileHover={{ scale: 1.1 }}>
            <FaRocket size={50} color="#00b4d8" />
            <FeatureTitle>Smart Strategy</FeatureTitle>
            <FeatureDescription>
              AI-driven strategies that adapt to your business environment.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard component={motion.div} whileHover={{ scale: 1.1 }}>
            <FaChartLine size={50} color="#00b4d8" />
            <FeatureTitle>Market Insights</FeatureTitle>
            <FeatureDescription>
              Predict and stay ahead with real-time market trends.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard component={motion.div} whileHover={{ scale: 1.1 }}>
            <FaUsers size={50} color="#00b4d8" />
            <FeatureTitle>Competitor Analysis</FeatureTitle>
            <FeatureDescription>
              Analyze competitors and discover growth opportunities.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesSection>
      </Container>

      {/* Call-to-Action Section */}
      <Box sx={{ backgroundColor: '#f4f4f4', padding: '60px 0', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" gutterBottom>
            Ready to revolutionize your business?
          </Typography>
          <HeroButton variant="contained">Start Now</HeroButton>
        </motion.div>
      </Box>
    </div>
  );
}

export default LandingPage;
