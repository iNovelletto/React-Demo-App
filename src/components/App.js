import React from 'react';
import PropTypes from 'prop-types';
//import { render } from 'react-dom';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import { orange, amber, red } from 'material-ui/colors';
import MenuIcon from 'material-ui-icons/Menu';
// import * as Colors from 'material-ui/colors';
//import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import { fade } from 'material-ui/utils/colorManipulator';

// import { Switch, NavLink, Route } from 'react-router-dom';
// import HomePage from './HomePage';
// import FuelSavingsPage from '../containers/FuelSavingsPage';
// import AboutPage from './AboutPage';
// import NotFoundPage from './NotFoundPage';
//import Master from './Master';
const styles = createMuiTheme({
  palette: createPalette({
    "primary": orange,
    "secondary": amber,
    "error": red,
    "type": "light"
  })
});

const class1 = { "color": white };

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={styles} >
          <AppBar>
            <Toolbar >
              <IconButton  aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography className="class1" type="title">
                Title
              </Typography>
              <Button >Login</Button>
            </Toolbar>
          </AppBar>
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
