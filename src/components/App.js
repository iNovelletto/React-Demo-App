//This components handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Drawer, MenuItem, AppBar } from 'material-ui';

const styleX = {
  position: "fixed",
  left: 0
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() { this.setState({open: !this.state.open}); }

  render() {
    return (
      <MuiThemeProvider>
        <div>
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <AppBar title="Test" style={styleX} onClick={this.handleToggle}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
