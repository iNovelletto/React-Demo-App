import React from 'react';
import PropTypes from 'prop-types';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import { orange, amber, red } from 'material-ui/colors';
import MenuIcon from 'material-ui-icons/Menu';

const styles = createMuiTheme({
  palette: createPalette({
    "primary": orange,
    "secondary": amber,
    "error": red,
    "type": "dark",    
  })
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={styles} >
          <AppBar>
            <Toolbar >
              <IconButton  aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title">
                Title
              </Typography>
              <div className="loginButton">
                <Button >Login</Button>
              </div>
            </Toolbar>
          </AppBar>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
