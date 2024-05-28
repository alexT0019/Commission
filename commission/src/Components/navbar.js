import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export default function NavBar() {
  //style
  const navStyle = {
    marginLeft: 15,
    marginRight: 15
  }

  return (
    <Box sx={{ width: '100%' }}
      display={'flex'}
      justifyContent={'center'}
    >
      <Link style={navStyle} href="/" underline="none">
        Home
      </Link>
      <Link style={navStyle} href="/info" underline="none">
        Info
      </Link>
      <Link style={navStyle} href="/form" underline="none">
        Form
      </Link>
    </Box>
  );
}
