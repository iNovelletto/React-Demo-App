import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, Button, IconButton, Toolbar, Typography  } from 'material-ui';
import { Menu, Flag, MailOutline } from 'material-ui-icons';

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
        <IconButton className={classes.appBarMailButton}>
          <MailOutline />
        </IconButton>
        <IconButton className={classes.appBarFlagButton}>
          <Flag />
        </IconButton>
        <Button className={classes.appBarLoginButton}>
          Login
        </Button>
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
