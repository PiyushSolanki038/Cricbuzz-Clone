import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Tabs, Tab, Chip, Button } from '@mui/material';
import { CalendarToday, LocationOn } from '@mui/icons-material';

const Series = () => {
  const [category, setCategory] = useState(0);

  const seriesData = [
    {
      id: 1,
      name: "Indian Premier League 2025",
      type: "T20",
      status: "Ongoing",
      dates: "Mar 15 - May 20, 2025",
      venue: "India",
      image: "https://via.placeholder.com/300x150",
      teams: ["MI", "CSK", "RCB", "KKR", "DC", "SRH", "PBKS", "RR"]
    },
    {
      id: 2,
      name: "ICC Cricket World Cup 2025",
      type: "ODI",
      status: "Upcoming",
      dates: "Oct 1 - Nov 15, 2025",
      venue: "Australia",
      image: "https://via.placeholder.com/300x150",
      teams: ["IND", "AUS", "ENG", "NZ", "SA", "PAK", "WI", "BAN"]
    }
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Cricket Series</Typography>

      <Tabs value={category} onChange={(e, v) => setCategory(v)} sx={{ mb: 3 }}>
        <Tab label="All Series" />
        <Tab label="International" />
        <Tab label="Domestic" />
        <Tab label="League" />
        <Tab label="Women" />
      </Tabs>

      <Grid container spacing={3}>
        {seriesData.map(series => (
          <Grid item xs={12} md={6} key={series.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={series.image}
                alt={series.name}
              />
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6">{series.name}</Typography>
                  <Chip 
                    label={series.status} 
                    color={series.status === 'Ongoing' ? 'success' : 'primary'}
                    size="small"
                  />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <CalendarToday fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {series.dates}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LocationOn fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {series.venue}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  {series.teams.map(team => (
                    <Chip 
                      key={team} 
                      label={team} 
                      size="small" 
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>

                <Button variant="contained" fullWidth>
                  View Series
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Series;