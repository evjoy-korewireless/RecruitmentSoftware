import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  endpoints: {
    serverIp: 'http://freshers.gadgeon.com/student'
  }
};
