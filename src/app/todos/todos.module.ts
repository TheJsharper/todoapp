import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AddComponent } from './todo/add/add.component';
import { FilterPipe } from './todo/filter/filter.pipe';
import { FooterComponent } from './todo/footer/footer.component';
import { ItemComponent } from './todo/item/item.component';
import { ListComponent } from './todo/list/list.component';
import { MainComponent } from './todo/main.component';
import { PageFooterComponent } from './todo/page-footer/page-footer.component';
import { reducers } from './todo/todo.reducer';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path: '', component: MainComponent
  }
]

/*@NgModule({
  declarations: [MainComponent, ListComponent, ItemComponent, FooterComponent, PageFooterComponent, AddComponent, FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("todos",reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    } as StoreDevtoolsOptions)
  ]
  ,
  exports: [MainComponent]
})
export class TodosModule {
}*/
