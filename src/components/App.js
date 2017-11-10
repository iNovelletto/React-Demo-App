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

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (open) => {
    this.setState({
      left: open
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={styles} >
          <Drawer open={this.state.left} onRequestClose={() => this.toggleDrawer(false)}>
            <NavLink to="/about">
              <IconButton>
                <Schedule style={iconStyle}></Schedule>
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
              <IconButton onClick={() => this.toggleDrawer(true)} aria-label="Menu">
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
