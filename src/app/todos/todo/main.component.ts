import { Component, Inject, OnInit } from '@angular/core';
//import {AppState} from "./todo.reducer";
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import { AddComponent, FooterComponent, ListComponent, PageFooterComponent } from './';
import { ToggleAllTodoAction } from "./todo.actions";

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [  ListComponent,  FooterComponent, PageFooterComponent, AddComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( @Inject(Store)private  store: Store<AppState>) {
  }

  ngOnInit() {
  }

  toggleAll(): void {
  this.store.dispatch(new ToggleAllTodoAction());
  }
}
