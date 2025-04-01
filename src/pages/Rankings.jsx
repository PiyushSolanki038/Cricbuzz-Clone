import React, { useState } from 'react';
import { 
  Box, Typography, Tabs, Tab, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Avatar 
} from '@mui/material';

const Rankings = () => {
  const [format, setFormat] = useState(0);

  const rankings = [
    {
      rank: 1,
      team: "India",
      flag: "/flags/ind.png",
      matches: 30,
      points: 120,
      rating: 125
    },
    {
      rank: 2,
      team: "Australia",
      flag: "/flags/aus.png",
      matches: 28,
      points: 110,
      rating: 120
    }
    // Add more rankings
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>ICC Rankings</Typography>

      <Tabs value={format} onChange={(e, v) => setFormat(v)} sx={{ mb: 3 }}>
        <Tab label="Test" />
        <Tab label="ODI" />
        <Tab label="T20" />
      </Tabs>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Team</TableCell>
              <TableCell align="right">Matches</TableCell>
              <TableCell align="right">Points</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankings.map((row) => (
              <TableRow key={row.rank} hover>
                <TableCell>{row.rank}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar src={row.flag} sx={{ width: 24, height: 24 }} />
                    {row.team}
                  </Box>
                </TableCell>
                <TableCell align="right">{row.matches}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Rankings;