import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Card, CardContent, Button, List, ListItem, 
  ListItemIcon, ListItemText, Paper, Divider, Stack, Dialog, 
  DialogTitle, DialogContent, DialogActions, TextField, Alert,
  Container, useTheme, useMediaQuery
} from '@mui/material';
import { 
  Check, Star, LiveTv, Analytics, Article, 
  SportsScore, Speed, DeviceHub, Devices
} from '@mui/icons-material';

const CricbuzzPlus = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState(null);

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setOpenDialog(true);
  };

  const handleSubscriptionSubmit = () => {
    // Here you would typically handle the subscription process
    try {
      // Simulating API call
      setTimeout(() => {
        setOpenDialog(false);
        setError(null);
        // Show success message
      }, 1000);
    } catch (err) {
      setError('Subscription failed. Please try again.');
    }
  };

  const features = [
    {
      icon: <LiveTv sx={{ fontSize: 40 }} />,
      title: "Live Match Coverage",
      description: "Watch matches live with expert commentary and analysis"
    },
    {
      icon: <SportsScore sx={{ fontSize: 40 }} />,
      title: "Real-time Statistics",
      description: "Access in-depth match statistics and player performance data"
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: "Fast Updates",
      description: "Get ball-by-ball updates and instant notifications"
    },
    {
      icon: <DeviceHub sx={{ fontSize: 40 }} />,
      title: "Multi-platform Access",
      description: "Enjoy seamless experience across all your devices"
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        py: 6,
        background: 'linear-gradient(45deg, #009270 30%, #00b386 90%)',
        borderRadius: theme.shape.borderRadius,
        mt: 3,
        color: 'white',
        textAlign: 'center'
      }}>
        <Typography variant="h2" gutterBottom fontWeight="bold">
          Cricbuzz Plus
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9 }}>
          Experience Cricket Like Never Before
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 4, 
                height: '100%', 
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
            >
              <Box sx={{ 
                color: 'primary.main', 
                mb: 2,
                transform: 'scale(1.2)'
              }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography 
        variant="h3" 
        align="center" 
        sx={{ 
          mt: 8, 
          mb: 6,
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #009270 30%, #00b386 90%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Choose Your Plan
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card 
              elevation={plan.popular ? 8 : 3}
              sx={{ 
                height: '100%',
                transform: plan.popular ? 'scale(1.05)' : 'none',
                border: plan.popular ? `2px solid ${theme.palette.primary.main}` : 'none',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: plan.popular ? 'scale(1.08)' : 'scale(1.03)',
                  boxShadow: 6
                }
              }}
            >
              {plan.popular && (
                <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 0.5, textAlign: 'center' }}>
                  <Typography variant="subtitle2">MOST POPULAR</Typography>
                </Box>
              )}
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {plan.name}
                </Typography>
                <Stack direction="row" alignItems="flex-end" spacing={1} sx={{ mb: 3 }}>
                  <Typography variant="h3">{plan.price}</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    {plan.period}
                  </Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <List>
                  {plan.features.map((feature, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemIcon>
                        <Check color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button 
                  variant={plan.popular ? "contained" : "outlined"} 
                  fullWidth 
                  size="large"
                  sx={{ mt: 2 }}
                  onClick={() => handleSubscribe(plan)}
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          Subscribe to {selectedPlan?.name} Plan
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Card Number"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Expiry Date"
                  placeholder="MM/YY"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  type="password"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleSubscriptionSubmit}
          >
            Confirm Payment
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

const plans = [
  {
    id: 1,
    name: "Monthly",
    price: "₹299",
    period: "per month",
    features: [
      "Ad-free experience",
      "HD live streaming",
      "Match highlights",
      "Basic statistics"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Yearly",
    price: "₹1,999",
    period: "per year",
    features: [
      "All Monthly features",
      "4K live streaming",
      "Expert analysis",
      "Advanced statistics",
      "Priority support"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Premium",
    price: "₹3,999",
    period: "per year",
    features: [
      "All Yearly features",
      "Multiple device access",
      "Offline viewing",
      "Exclusive content",
      "Early access to features"
    ],
    popular: false
  }
];

export default CricbuzzPlus;