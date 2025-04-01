import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import LiveScores from './pages/LiveScores';
import Schedule from './pages/Schedule';
import News from './pages/News';
import Series from './pages/Series';
import Teams from './pages/Teams';
import Rankings from './pages/Rankings';
import Videos from './pages/Videos';
import { CricketProvider } from './context/CricketContext';
import { ThemeProvider, createTheme } from '@mui/material';
import Archives from './pages/Archives';
import CricbuzzPlus from './pages/CricbuzzPlus';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009270'
    }
  }
});

function App() {
  return (
    <CricketProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Navbar />
            <Container>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/live-scores" element={<LiveScores />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/news" element={<News />} />
                <Route path="/series" element={<Series />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/rankings" element={<Rankings />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/cricbuzz-plus" element={<CricbuzzPlus />} />
              </Routes>
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    </CricketProvider>
  );
}

export default App;
