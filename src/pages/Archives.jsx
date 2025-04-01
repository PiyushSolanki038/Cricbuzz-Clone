import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Archives = () => {
  const [year, setYear] = useState('2024');
  const [series, setSeries] = useState('all');

  const archiveData = [
    {
      id: 1,
      title: "IPL 2024",
      winner: "Mumbai Indians",
      date: "May 2024",
      summary: "Complete tournament statistics and highlights"
    },
    {
      id: 2,
      title: "World Cup 2024",
      winner: "India",
      date: "December 2024",
      summary: "Tournament details and match archives"
    }
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Cricket Archives</Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select value={year} onChange={(e) => setYear(e.target.value)} label="Year">
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Series Type</InputLabel>
            <Select value={series} onChange={(e) => setSeries(e.target.value)} label="Series Type">
              <MenuItem value="all">All Series</MenuItem>
              <MenuItem value="international">International</MenuItem>
              <MenuItem value="domestic">Domestic</MenuItem>
              <MenuItem value="league">League</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {archiveData.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography color="text.secondary" gutterBottom>
                  Winner: {item.winner}
                </Typography>
                <Typography variant="body2">{item.summary}</Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                  {item.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Archives;