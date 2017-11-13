import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {  IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import { Schedule, Storage, BugReport, ChevronLeft, ChevronRight } from 'material-ui-icons';
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
                  <Schedule />
                </ListItemIcon>
                <ListItemText primary="Schedules" />
              </ListItem>
            </NavLink>
            <ListItem button>
              <ListItemIcon>
                <Storage />
              </ListItemIcon>
              <ListItemText primary="Test Cases" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BugReport />
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
