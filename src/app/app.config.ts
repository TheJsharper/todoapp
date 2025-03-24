import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { metaReducers, reducers } from './store/reducers/app.reducer';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    importProvidersFrom(
            StoreModule.forRoot(reducers,{ metaReducers}, ), [StoreDevtoolsModule.instrument() ],
            !environment.production ? StoreDevtoolsModule.instrument() : [],
          )
  
  ]
};