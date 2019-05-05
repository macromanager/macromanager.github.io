import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModuleLibrary } from './modules/MainModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary);