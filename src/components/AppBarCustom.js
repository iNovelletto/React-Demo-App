import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import { Menu } from 'material-ui-icons';

const AppBarCustom = ({classes, open, handleDrawerOpen}) => {
  return (
    <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
      <Toolbar disableGutters={!open}>
        <IconButton onClick={() => handleDrawerOpen()}>
          <Menu />
        </IconButton>
        <Typography type="title">
          Testing
        </Typography>
        <div className="loginButton">
          <Button >Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

AppBarCustom.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired
};

export default AppBarCustom;
