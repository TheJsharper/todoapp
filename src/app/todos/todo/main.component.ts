import {Component, OnInit} from '@angular/core';
//import {AppState} from "./todo.reducer";
import {Store} from '@ngrx/store';
import {ToggleAllTodoAction} from "./todo.actions";
import { AppState } from 'src/app/store/reducers/app.reducer';

@Component({
  selector: 'app-todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private  store: Store<AppState>) {
  }

  ngOnInit() {
  }

  toggleAll(): void {
  this.store.dispatch(new ToggleAllTodoAction());
  }
}
