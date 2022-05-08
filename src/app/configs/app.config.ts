import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    home: 'home',
    about: 'about',
    error404: '404'
  },
  endpoints: {}
};
