import React, { ReactElement } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export default function Loading(): ReactElement {
  return (
    <Stack sx={{ height: '100vh' }} justifyContent="center" alignItems="center">
      <Box>
        <CircularProgress />
      </Box>
    </Stack>
  );
}
