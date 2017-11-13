import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import AppBarCustom from './AppBarCustom';
import DrawerCustom from './DrawerCustom';

class Master extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBarCustom
              classes={classes}
              open={this.state.open}
              handleDrawerOpen={this.handleDrawerOpen}/>
            <DrawerCustom
              classes={classes}
              open={this.state.open}
              handleDrawerClose={this.handleDrawerClose}
              theme={theme}/>
            <main className={classes.content}>
              <Switch>
                <Route exact path="/" render={(classes) => (
                  <HomePage {...classes} />)}/>
                <Route path="/fuel-savings" render={(classes) => (
                  <FuelSavingsPage {...classes} />)}/>
                <Route path="/about" render={(classes) => (
                  <AboutPage {...classes} />)}/>
                <Route component={NotFoundPage} />
              </Switch>
            </main>
            </div>
        </div>
    );
  }
}

Master.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Master;
