import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';


const Profile = () => {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };
    const { user } = useSelector((state) => state.user);
    const favoriteMovies = []
    const watchlistMovies = []
    return (
        <Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" gutterBottom>My Profile</Typography>
                <Button color="inherit" onClick={logout}>
                Logout &nbsp; <ExitToApp />
                </Button>
            </Box>
        {!favoriteMovies.length && !watchlistMovies.length ?
          <Typography variant="h5">Add favourite or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            Favourite movies
          </Box>
        )}
        </Box>
  )
}

export default Profile
