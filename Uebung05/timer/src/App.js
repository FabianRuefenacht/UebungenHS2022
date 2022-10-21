import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <>
      <AppBar position='sticky' color='secondary'>
        <Toolbar>
          <Typography variant='h6'>Counter</Typography>
        </Toolbar>
      </AppBar>
      <Timer />
    </>
  );
}

export default App;

