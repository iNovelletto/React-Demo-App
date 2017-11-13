import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {  IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import { BeachAccess, ChevronLeft, ChevronRight, Dashboard, LibraryBooks, Schedule, Storage } from 'material-ui-icons';
import { NavLink } from 'react-router-dom';

const DrawerCustom = ({open, handleDrawerClose, classes, theme}) => {
    return (
      <Drawer
        type="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <NavLink to="/About">
              <ListItem button>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </NavLink>
            <ListItem button>
              <ListItemIcon>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Test Cases" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BeachAccess />
              </ListItemIcon>
              <ListItemText primary="Test Suites" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Schedule />
              </ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Storage />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
};

DrawerCustom.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired
};

export default DrawerCustom;
