import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './todos';

/*
export const routes:Routes=[
  {
    path:"todo",
    loadChildren: ()=> import('./todos/todos.module').then(m => m.TodosModule),

  },
  {
    path: "**",
    redirectTo: '/'
}
]*/


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
    path: "/",
    redirectTo: '/todo'
  }
];



/*@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers,{ metaReducers}, ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})*/
