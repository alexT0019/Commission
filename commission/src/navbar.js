import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export default function NavBar() {
  //style
  const navStyle = {
    marginLeft: 15,
    marginRight: 15
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}
      display={'flex'}
      justifyContent={'center'}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <Link style={navStyle} href="/" underline="none">
          Items
        </Link>
        <Link style={navStyle} href="/info" underline="none">
          Info
        </Link>
        <Link style={navStyle} href="#" underline="none">
          Form
        </Link>
        {/* <LinkTab label="Page One" href="/" />
  <LinkTab label="Page Two" href="/info" />
  <LinkTab label="Page Three" href="/" /> */}

  {/* If use Link can route but cannot use tab
  If use LinkTab can use tab but cannot route */}

      </Tabs>
    </Box>
  );
}
