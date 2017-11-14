import React from 'react';
import createPalette from 'material-ui/styles/createPalette';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withStyles from 'material-ui/styles/withStyles';
import { grey, orange, amber, red } from 'material-ui/colors';
import Master from './Master';
import { styles } from '../styles/styles';

const customTheme = createMuiTheme({
  palette: createPalette({
    "primary": orange,
    "accent": grey,
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

export default withStyles(styles, { withTheme: true })(App);
