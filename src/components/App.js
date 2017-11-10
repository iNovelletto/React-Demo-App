import React from 'react';
import PropTypes from 'prop-types';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from 'material-ui';
import { orange, amber, red } from 'material-ui/colors';
import { Menu , Schedule, Storage, BugReport } from 'material-ui-icons';
// import * as Colors from 'material-ui/colors';
//import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import { fade } from 'material-ui/utils/colorManipulator';

import { Switch, NavLink, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

const styles = createMuiTheme({
  palette: createPalette({
    "primary": orange,
    "secondary": amber,
    "error": red,
    "type": "dark"
  })
});

const iconStyle = {
  color: 'white'
};

class App extends React.Component {
  state = {
    drawerExpand: -1,
    drawerWidth: null
  };

  expandDrawer = () => {
    this.setState({
      drawerExpand: this.state.drawerExpand * -1
    });
  };
 
  render() {
    return (
      <MuiThemeProvider theme={styles} >
          <Drawer
            classes={this.state.drawerExpand == 1 ? {paper: 'drawerStyle drawerStyleOpen'} : {paper: 'drawerStyle'} }
            type="persistent" 
            open='open'             
          >
            <NavLink to="/about">
              <IconButton tooltip="Schedules">
                <Schedule style={iconStyle}></Schedule>
                {this.state.drawerExpand==1 ? <Typography type="h4">Schedules</Typography> : null}
              </IconButton>
            </NavLink>
            <IconButton>
            <Storage style={iconStyle} />
            </IconButton>
            <IconButton>
            <BugReport style={iconStyle} />
            </IconButton>
          </Drawer>
          <AppBar>
            <Toolbar >
              <IconButton onClick={() => this.expandDrawer()}>
                <Menu />
              </IconButton>
              <Typography type="title">
                Title
              </Typography>
              <div className="loginButton">
                <Button >Login</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fuel-savings" component={FuelSavingsPage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch> */
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

//export default withStyles(styles)(App);
export default App;

  //const activeStyle = { color: 'blue' };

      //<div>
        /* <div>

          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch> */
      //</div>
