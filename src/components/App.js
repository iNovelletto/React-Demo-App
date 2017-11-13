import React from 'react';
import PropTypes from 'prop-types';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
//import { MuiThemeProvider } from 'material-ui/styles';
import { orange, amber, red } from 'material-ui/colors';
import Master from './Master';
import { styles } from '../styles/styles';

const customTheme = createMuiTheme({
  palette: createPalette({
    "primary": orange,
    "secondary": amber,
    "error": red,
    "type": "dark"
  })
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={customTheme} >
        <Master {...this.props}/>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);

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
