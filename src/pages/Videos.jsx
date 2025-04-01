import React, { useState } from 'react';
import { 
  Box, Grid, Card, CardContent, CardMedia, Typography, 
  Tabs, Tab, IconButton, Chip 
} from '@mui/material';
import { PlayArrow, AccessTime } from '@mui/icons-material';

const Videos = () => {
  const [category, setCategory] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Match Highlights: MI vs CSK",
      thumbnail: "/thumbnails/mi-csk.jpg",
      duration: "10:30",
      views: "1.2M views",
      date: "2 hours ago",
      category: "Highlights"
    }
    // Add more videos
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Cricket Videos</Typography>

      <Tabs value={category} onChange={(e, v) => setCategory(v)} sx={{ mb: 3 }}>
        <Tab label="All Videos" />
        <Tab label="Highlights" />
        <Tab label="Interviews" />
        <Tab label="Analysis" />
      </Tabs>

      <Grid container spacing={3}>
        {videos.map(video => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Card>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={video.thumbnail}
                  alt={video.title}
                />
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: 8, 
                  right: 8,
                  bgcolor: 'rgba(0,0,0,0.7)',
                  px: 1,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <AccessTime sx={{ fontSize: 16, color: 'white', mr: 0.5 }} />
                  <Typography variant="caption" sx={{ color: 'white' }}>
                    {video.duration}
                  </Typography>
                </Box>
                <IconButton 
                  sx={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                  }}
                >
                  <PlayArrow sx={{ color: 'white' }} />
                </IconButton>
              </Box>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    {video.views} • {video.date}
                  </Typography>
                  <Chip label={video.category} size="small" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;