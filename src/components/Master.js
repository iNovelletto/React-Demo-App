import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import AppBarCustom from './AppBarCustom';
import DrawerCustom from './DrawerCustom';
import LoginForm from './LoginForm';
import TestCasePage from './TestCasePage';

class Master extends React.Component {
  state = {
    open: false,
    openCollapse: false
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleCollapse = () => {
    this.setState({ openCollapse: !this.state.openCollapse });
  };

  render() {
    const { classes, theme } = this.props;

    return (
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBarCustom
              classes={classes}
              open={this.state.open}
              handleDrawer={this.handleDrawer}/>
            <DrawerCustom
              classes={classes}
              open={this.state.open}
              openCollapse={this.state.openCollapse}
              handleDrawer={this.handleDrawer}
              handleCollapse={this.handleCollapse}
              theme={theme}/>
            <main className={classes.content}>
              <Switch>
                <Route exact path="/" render={() => (
                  <HomePage {...classes} />)}/>
                <Route path="/fuel-savings" render={() => (
                  <FuelSavingsPage {...classes} />)}/>
                <Route path="/about" render={() => (
                  <AboutPage {...classes} />)}/>
                <Route path="/login" render={() => (
                  <LoginForm {...classes} />)}/>
                <Route path="/testcase" render={() => (
                  <TestCasePage {...classes} />)}/>
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
