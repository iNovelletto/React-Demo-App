import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import { BeachAccess, ChevronLeft, ChevronRight, Dashboard, ExpandLess, ExpandMore, LibraryAdd, LibraryBooks, Schedule, Storage } from 'material-ui-icons';
import { NavLink, Link } from 'react-router-dom';

const DrawerCustom = ({open, openCollapse, handleDrawer, handleCollapse, classes, theme}) => {
    return (
      <Drawer
        type="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => { if(openCollapse)handleCollapse(); handleDrawer(); }}>
              {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </div>
          <Divider />
          <List>            
              <ListItem button component={Link} to="/About" >
                <ListItemIcon>
                  <Dashboard/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>            
            <ListItem button>
              <ListItemIcon>
                <LibraryBooks />
              </ListItemIcon>
              <ListItemText primary="Test Cases" />
              <ListItemIcon onClick={handleCollapse}>
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItem>
            <Collapse component="li" in={openCollapse} transitionDuration="auto" unmountOnExit>
              <List disablePadding>                
                  <ListItem button className={classes.nested} component={Link} to="/testcase">
                    <ListItemIcon>
                      <LibraryAdd />
                    </ListItemIcon>
                    <ListItemText inset primary="Add"/>
                  </ListItem>                
              </List>
            </Collapse>
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
  handleDrawer: PropTypes.func.isRequired
};

export default DrawerCustom;
