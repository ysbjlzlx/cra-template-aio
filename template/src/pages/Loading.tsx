import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ReactElement } from 'react';

export default function Loading(): ReactElement {
  return (
    <Stack sx={{ height: '100vh' }} justifyContent="center" alignItems="center">
      <Box>
        <CircularProgress />
      </Box>
    </Stack>
  );
}
