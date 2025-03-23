//import { reducers } from './todos/todo/todo.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers/app.reducer';
import { Routes, RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { environment } from 'src/environments/environment';

const routes:Routes=[
  {
    path:"todo",
    loadChildren: ()=> import('./todos/todos.module').then(m => m.TodosModule),

  },
  {
    path: "**",
    redirectTo: '/'
}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers,{ metaReducers}, ), [StoreDevtoolsModule.instrument() ],
    //!environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
