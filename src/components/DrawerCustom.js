import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from 'material-ui';
import { BeachAccess, ChevronLeft, ChevronRight, Dashboard, ExpandLess, ExpandMore, LibraryAdd, LibraryBooks, Schedule, Storage } from 'material-ui-icons';
import { Link } from 'react-router-dom';

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
            <IconButton className={classes.colorWhite} onClick={() => { if(openCollapse)handleCollapse(); handleDrawer(); }}>
              {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button component={Link} to="/dashboard" >
                <ListItemIcon>
                  <Dashboard className={classes.colorWhite}/>
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={<Typography type="subheading" className={classes.colorWhite}>Dashboard</Typography>}
                  />
              </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LibraryBooks className={classes.colorWhite}/>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography type="subheading" className={classes.colorWhite}>Test Cases</Typography>}/>
              <ListItemIcon onClick={handleCollapse}>
              {openCollapse ? <ExpandLess className={classes.colorWhite} /> : <ExpandMore className={classes.colorWhite}/>}
              </ListItemIcon>
            </ListItem>
            <Collapse component="li" in={openCollapse} transitionDuration="auto" unmountOnExit>
              <List disablePadding>
                  <ListItem button className={classes.nested} component={Link} to="/testcase">
                    <ListItemIcon>
                      <LibraryAdd className={classes.colorWhite}/>
                    </ListItemIcon>
                    <ListItemText
                      disableTypography
                      primary={<Typography type="subheading" className={classes.colorWhite}>Add</Typography>}/>
                  </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <ListItemIcon>
                <BeachAccess className={classes.colorWhite}/>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography type="subheading" className={classes.colorWhite}>Test Suites</Typography>}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Schedule className={classes.colorWhite}/>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography type="subheading" className={classes.colorWhite}>Schedule</Typography>}/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Storage className={classes.colorWhite}/>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography type="subheading" className={classes.colorWhite}>Reports</Typography>}/>
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
};

DrawerCustom.propTypes = {
  open: PropTypes.bool.isRequired,
  openCollapse: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  handleCollapse: PropTypes.func.isRequired
};

export default DrawerCustom;
