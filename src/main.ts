import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/reducers/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { CounterEffect } from './app/store/effects/counter.effect';

bootstrapApplication(AppComponent, {
    providers: [
    provideStore({ counter: counterReducer}),
    provideEffects([CounterEffect]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ]
});
