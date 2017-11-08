import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const appBarStyle = {
  position: 'fixed',
  left: 0
};

const Header = ({open, appBarClick}) => {
  return (<div>
    <Drawer docked={false} open={open}/>
    <AppBar title="Test" style={appBarStyle} onLeftIconButtonTouchTap={appBarClick} />
  </div>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  appBarClick: PropTypes.func
};

export default Header;
