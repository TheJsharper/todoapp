import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './todo/main.component';
import { ListComponent } from './todo/list/list.component';
import { ItemComponent } from './todo/item/item.component';
import { FooterComponent } from './todo/footer/footer.component';
import { PageFooterComponent } from './todo/page-footer/page-footer.component';
import { AddComponent } from './todo/add/add.component';

@NgModule({
  declarations: [MainComponent, ListComponent, ItemComponent, FooterComponent, PageFooterComponent, AddComponent],
  imports: [
    CommonModule
  ]
  ,
  exports:[MainComponent]
})
export class TodosModule { }
