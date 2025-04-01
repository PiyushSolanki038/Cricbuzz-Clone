import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Tabs, Tab } from '@mui/material';

const Teams = () => {
  const [category, setCategory] = useState(0);

  const teams = [
    {
      id: 1,
      name: "Mumbai Indians",
      logo: "/team-logos/mi.png",
      captain: "Rohit Sharma",
      titles: "5 IPL Titles",
      category: "IPL"
    },
    {
      id: 2,
      name: "India",
      logo: "/team-logos/india.png",
      captain: "Rohit Sharma",
      ranking: "Rank #1 in ODI",
      category: "International"
    }
    // Add more teams
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Teams</Typography>
      
      <Tabs value={category} onChange={(e, v) => setCategory(v)} sx={{ mb: 3 }}>
        <Tab label="All Teams" />
        <Tab label="International" />
        <Tab label="IPL" />
        <Tab label="Domestic" />
      </Tabs>

      <Grid container spacing={3}>
        {teams.map(team => (
          <Grid item xs={12} sm={6} md={4} key={team.id}>
            <Card sx={{ display: 'flex', height: '100%' }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={team.logo}
                alt={team.name}
              />
              <CardContent>
                <Typography variant="h6">{team.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Captain: {team.captain}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {team.titles || team.ranking}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Teams;