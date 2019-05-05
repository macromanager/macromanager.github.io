"use strict";
exports.__esModule = true;
//import {CustomerComponent} from '../components/CustomerComponent';
var HomeComponent_1 = require("../components/HomeComponent");
var LearnComponent_1 = require("../components/LearnComponent");
//import {WelcomeComponent} from "../Component/WelcomeComponent";
exports.ApplicationRoutes = [
    { path: 'downloads', component: LearnComponent_1.LearnComponent },
    { path: 'learn', component: LearnComponent_1.LearnComponent },
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: '', component: HomeComponent_1.HomeComponent },
];
