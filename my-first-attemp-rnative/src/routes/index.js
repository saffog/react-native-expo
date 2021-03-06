import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../views/Login';
import Home from '../views/Home';
import LoadingPage from '../views/LoadingPage';
import Results from '../views/Results';
import Profile from '../views/Profile';
import {
    LOADING_PAGE,
    LOGIN,
    HOME,
    RESULTS,
    PROFILE
} from '../constants';

/* This section is required to setup the several routes for my views 
    Notice we are using stack navigator to put the views order to show.
*/ 

const AppNavigator = createStackNavigator({
    [LOGIN]:Login,
    [LOADING_PAGE]:LoadingPage,
    [HOME]:Home,
    [RESULTS]:Results,
    [PROFILE]:Profile
},{
    headerMode:'none'
});

export default createAppContainer(AppNavigator);

