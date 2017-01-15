import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/home/home-page';
import AboutPage from './components/about/about-page';
import CoursePage from './components/course/courses-page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
