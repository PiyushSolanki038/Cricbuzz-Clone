import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SportsCricket } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#009270' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <SportsCricket />
          </IconButton>

          <Typography 
            variant="h5" 
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 0,
              mr: 4,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            CRICBUZZ
          </Typography>

          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            gap: 1,
            '& .MuiButton-root': {
              minWidth: 'auto',
              px: 2,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.95rem',
              transition: 'all 0.2s',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }
          }}>
            <Button 
              color="inherit" 
              onClick={() => navigate('/live-scores')}
              sx={{ 
                backgroundColor: isActive('/live-scores') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/live-scores') ? 700 : 400
              }}
            >
              Live Scores
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/schedule')}
              sx={{ 
                backgroundColor: isActive('/schedule') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/schedule') ? 700 : 400
              }}
            >
              Schedule
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/archives')}
              sx={{ 
                backgroundColor: isActive('/archives') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/archives') ? 700 : 400
              }}
            >
              Archives
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/news')}
              sx={{ 
                backgroundColor: isActive('/news') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/news') ? 700 : 400
              }}
            >
              News
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/series')}
              sx={{ 
                backgroundColor: isActive('/series') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/series') ? 700 : 400
              }}
            >
              Series
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/teams')}
              sx={{ 
                backgroundColor: isActive('/teams') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/teams') ? 700 : 400
              }}
            >
              Teams
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/videos')}
              sx={{ 
                backgroundColor: isActive('/videos') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/videos') ? 700 : 400
              }}
            >
              Videos
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate('/rankings')}
              sx={{ 
                backgroundColor: isActive('/rankings') ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: isActive('/rankings') ? 700 : 400
              }}
            >
              Rankings
            </Button>
          </Box>

          <Button 
            variant="contained"
            onClick={() => navigate('/cricbuzz-plus')}
            sx={{
              backgroundColor: 'white',
              color: '#009270',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
              px: 3,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.95rem',
              boxShadow: 'none'
            }}
          >
            Cricbuzz Plus
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;