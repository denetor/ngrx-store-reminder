import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideStoreDevtools } from '@ngrx/store-devtools';
import {appReducers} from "./store/app.reducers";
import {appEffects} from "./store/app.effects";
import {provideHttpClient, withInterceptors } from '@angular/common/http';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {JwtFnInterceptor} from "./core/interceptors/jwt-fn.interceptor";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

export const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MM YYYY',
    },
};

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideAnimations(),

      provideHttpClient(
          withInterceptors([JwtFnInterceptor])
      ),
      provideStore(appReducers),
      provideEffects(appEffects),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
      {provide: MAT_DATE_LOCALE, useValue: 'it-IT'},
      {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
      {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000, verticalPosition: 'top'}}
  ]
};
