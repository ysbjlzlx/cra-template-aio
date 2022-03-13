import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Stack sx={{ height: '100vh' }} justifyContent="center" alignItems="center">
      <Box>
        <Typography variant={'h2'} color={'gray'}>
          404 Not Found
        </Typography>
      </Box>
    </Stack>
  );
};

export default NotFound;
