import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Chip, Grid, CircularProgress, Button, Alert } from '@mui/material';
import { FilterList, Refresh } from '@mui/icons-material';
import { fetchLiveMatches } from '../services/cricketService';

const LiveScores = () => {
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [matches, setMatches] = useState([]);

  const loadMatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchLiveMatches();
      setMatches(data);
    } catch (err) {
      setError('Failed to load matches. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  const [filters, setFilters] = useState({
    international: true,
    domestic: true,
    t20: true,
    odi: true,
    test: true
  });

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const renderMatchScore = (team) => {
    return `${team.name} ${team.score} (${team.overs})`.trim();
  };

  return (
    <Box sx={{ py: 3 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Live Cricket Score</Typography>
        <Box>
          <Button 
            startIcon={<FilterList />}
            sx={{ mr: 2 }}
            variant="outlined"
          >
            Filters
          </Button>
          <Button 
            startIcon={loading ? <CircularProgress size={20} /> : <Refresh />}
            onClick={handleRefresh}
            variant="contained"
          >
            Refresh
          </Button>
        </Box>
      </Box>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="Live" />
          <Tab label="Upcoming" />
          <Tab label="Recent" />
        </Tabs>
      </Paper>

      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
        {Object.entries(filters).map(([key, value]) => (
          <Chip 
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            color={value ? "primary" : "default"}
            onClick={() => setFilters(prev => ({ ...prev, [key]: !prev[key] }))}
          />
        ))}
      </Box>

      <Grid container spacing={2}>
        {loading ? (
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
              <CircularProgress />
            </Box>
          </Grid>
        ) : matches.length === 0 ? (
          <Grid item xs={12}>
            <Alert severity="info">No matches currently available.</Alert>
          </Grid>
        ) : (
          matches.map(match => (
            <Grid item xs={12} key={match.id}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {match.series}
                </Typography>
                <Typography variant="h6">
                  {renderMatchScore(match.team1)}
                </Typography>
                <Typography variant="h6">
                  {renderMatchScore(match.team2)}
                </Typography>
                <Typography variant="body2" color="primary">
                  {match.status} • CRR: {match.runRate} • RRR: {match.reqRate}
                </Typography>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default LiveScores;