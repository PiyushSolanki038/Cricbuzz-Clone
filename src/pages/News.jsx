import React, { useState } from 'react';
import { 
  Box, Grid, Typography, Tabs, Tab, InputAdornment,
  TextField, Card, CardContent, CardMedia, Chip
} from '@mui/material';
import { Search } from '@mui/icons-material';

const News = () => {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');

  const mockNews = [
    {
      id: 1,
      title: "IPL 2025: Mumbai Indians clinch thriller against CSK",
      summary: "In a nail-biting finish, Mumbai Indians...",
      image: "path/to/image",
      category: "IPL",
      date: "2h ago",
      author: "John Doe"
    },
    // Add more mock news
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Cricket News</Typography>
        <TextField
          placeholder="Search news..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Tabs value={category} onChange={(e, v) => setCategory(v)} sx={{ mb: 3 }}>
        <Tab label="All News" />
        <Tab label="IPL" />
        <Tab label="International" />
        <Tab label="Domestic" />
        <Tab label="Features" />
      </Tabs>

      <Grid container spacing={3}>
        {mockNews.map(news => (
          <Grid item xs={12} md={6} key={news.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={news.image}
                alt={news.title}
              />
              <CardContent>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Chip label={news.category} size="small" color="primary" />
                  <Typography variant="caption" color="text.secondary">
                    {news.date}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.summary}
                </Typography>
                <Typography variant="caption" sx={{ mt: 2, display: 'block' }}>
                  By {news.author}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;