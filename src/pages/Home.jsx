import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MatchCard from '../components/MatchCard/MatchCard';
import NewsCard from '../components/NewsCard/NewsCard';

const mockMatches = [
  {
    series: 'Indian Premier League 2025',
    format: 'T20',
    team1: 'Mumbai Indians',
    team2: 'Kolkata Knight Riders',
    team1Score: '',
    team2Score: '',
    result: 'Today, 07:30 PM'
  },
  {
    series: 'Indian Premier League 2025',
    format: 'T20',
    team1: 'RR',
    team2: 'CSK',
    team1Score: '182-9 (20)',
    team2Score: '176-6 (20)',
    result: 'Rajasthan Royals won by 6 runs'
  }
];

const mockNews = [
  {
    title: 'SRH accuses HCA president of blackmail over ticketing demands',
    summary: 'Breaking news in cricket administration...',
    date: '3h ago',
    image: 'https://example.com/news1.jpg'
  },
  {
    title: 'ECB to retire MAK Pataudi trophy',
    summary: 'Latest updates in cricket history...',
    date: '25m ago',
    image: 'https://example.com/news2.jpg'
  }
];

const Home = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ mb: 2 }}>Live Matches</Typography>
          <Box sx={{ mb: 4 }}>
            {mockMatches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </Box>
          
          <Typography variant="h5" sx={{ mb: 2 }}>Recent Matches</Typography>
          <Box sx={{ mb: 4 }}>
            {mockMatches.map((match, index) => (
              <MatchCard key={`recent-${index}`} match={match} />
            ))}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h5" sx={{ mb: 2 }}>Latest News</Typography>
          {mockNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;