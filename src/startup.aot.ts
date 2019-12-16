import 'babel-polyfill';
import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';
import {Bootstrapper} from './Bootstrapper';
Bootstrapper.initialize();

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { MainModuleLibrary } from './modules/MainModuleLibrary';

// import { AppModuleNgFactory } from './app/app.module.ngfactory';

enableProdMode();

