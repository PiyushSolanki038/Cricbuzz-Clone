import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const NewsCard = ({ news }) => {
  return (
    <Card sx={{ mb: 2 }}>
      {news.image && (
        <CardMedia
          component="img"
          height="200"
          image={news.image}
          alt={news.title}
        />
      )}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.summary}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          {news.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;