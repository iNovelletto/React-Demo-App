import React from 'react';
import {Route, Switch } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import PropTypes from 'prop-types';

const Routes = () => (  
  <Switch>    
      <Route exact path="/" component={HomePage} />      
      <Route path="courses" component={CoursesPage}/>
      <Route path="course" component={ManageCoursePage}/>
      <Route path="course/:id" component={ManageCoursePage}/>
      <Route path="about" component={AboutPage}/>    
  </Switch>
);
