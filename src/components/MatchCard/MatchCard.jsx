import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const MatchCard = ({ match }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {match.series} • {match.format}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6">{match.team1}</Typography>
          <Typography variant="h6">{match.team1Score}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">{match.team2}</Typography>
          <Typography variant="h6">{match.team2Score}</Typography>
        </Box>
        <Typography sx={{ mt: 1 }} color="primary">
          {match.result}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MatchCard;