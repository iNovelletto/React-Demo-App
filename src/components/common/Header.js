import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import {AppBar, Tabs, Tab, Drawer} from 'material-ui';

const appBarStyle = {
  position: 'fixed'
};

const Header = ({loading}) => {
  return (
    <AppBar title="Test" style={appBarStyle} showMenuIconButton={false}>
      <Tabs>
        <Tab label="Tab 1"/>
      </Tabs>
    </AppBar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
