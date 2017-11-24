import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppBar, Button, IconButton, Toolbar, Typography  } from 'material-ui';
import { Menu, Flag, MailOutline } from 'material-ui-icons';
import { Link } from 'react-router-dom';

const AppBarCustom = ({classes, open, handleDrawer}) => {
  return (
    <AppBar className={classNames(classes.appBar, open && classes.appBarShift)}>
      <Toolbar disableGutters={!open}>
        <IconButton onClick={handleDrawer}>
          <Menu className={classes.colorWhite}/>
        </IconButton>
        <Typography type="title" className={classes.colorWhite}>
          Testing
        </Typography>
        <IconButton className={classes.appBarMailButton}>
          <MailOutline />
        </IconButton>
        <IconButton className={classes.appBarFlagButton}>
          <Flag />
        </IconButton>
        <Link to="/login">
          <Button className={classes.appBarLoginButton}>
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

AppBarCustom.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  handleDrawer: PropTypes.func.isRequired
};

export default AppBarCustom;
