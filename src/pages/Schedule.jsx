import React, { useState } from 'react';
import { 
  Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Select, MenuItem, FormControl, InputLabel,
  Pagination, TextField
} from '@mui/material';

const Schedule = () => {
  const [series, setSeries] = useState('all');
  const [date, setDate] = useState('');
  const [page, setPage] = useState(1);

  const mockSchedule = [
    {
      date: '2025-04-15',
      series: 'IPL 2025',
      match: 'MI vs CSK',
      venue: 'Wankhede Stadium',
      time: '19:30',
      type: 'T20'
    },
    {
      date: '2025-04-16',
      series: 'IPL 2025',
      match: 'RCB vs KKR',
      venue: 'M. Chinnaswamy Stadium',
      time: '19:30',
      type: 'T20'
    },
    {
      date: '2025-04-17',
      series: 'World Cup 2025',
      match: 'IND vs AUS',
      venue: 'MCG',
      time: '09:30',
      type: 'ODI'
    }
  ];

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Cricket Schedule</Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Series</InputLabel>
          <Select value={series} onChange={(e) => setSeries(e.target.value)} label="Series">
            <MenuItem value="all">All Series</MenuItem>
            <MenuItem value="ipl">IPL 2025</MenuItem>
            <MenuItem value="wc">World Cup 2025</MenuItem>
          </Select>
        </FormControl>

        <TextField
          type="date"
          label="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Series</TableCell>
              <TableCell>Match</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockSchedule.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.series}</TableCell>
                <TableCell>{row.match}</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination count={10} page={page} onChange={(e, v) => setPage(v)} />
      </Box>
    </Box>
  );
};

export default Schedule;