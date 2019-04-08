import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './todo/main.component';
import {ListComponent} from './todo/list/list.component';
import {ItemComponent} from './todo/item/item.component';
import {FooterComponent} from './todo/footer/footer.component';
import {PageFooterComponent} from './todo/page-footer/page-footer.component';
import {AddComponent} from './todo/add/add.component';
import {todoReducer} from "./todo/todo.reducer";
import {StoreDevtoolsModule, StoreDevtoolsOptions} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [MainComponent, ListComponent, ItemComponent, FooterComponent, PageFooterComponent, AddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({todos: todoReducer}),
    StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{
      maxAge: 25,
      logOnly: environment.production
    })
  ]
  ,
  exports: [MainComponent]
})
export class TodosModule {
}
