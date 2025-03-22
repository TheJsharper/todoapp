//import { reducers } from './todos/todo/todo.reducer';
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { TodosModule } from './todos/todos.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers/app.reducer';
import { Routes, RouterModule } from '@angular/router';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
//import { environment } from 'src/environments/environment';

/*
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
})*/
export class AppModule {
}
