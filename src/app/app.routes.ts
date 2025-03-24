import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './todos';




export const routes: Routes = [
  {
    path: "todo",
    loadComponent: () => import('./todos').then(m => m.MainComponent),
    providers: [

      importProvidersFrom(
        StoreModule.forFeature("todos", reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        } as StoreDevtoolsOptions))


    ]

  },
  {
    path: "**",
    redirectTo: '/todo'
  },
  {
    path: " ",
    redirectTo: '/todo'
  }
];



