import {Component, OnInit} from '@angular/core';
import {AppState} from "../todo.reducer";
import {Store} from "@ngrx/store";
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private  store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.subscribe((state: AppState) => {
      console.log(state);
      this.todos = state.todos;
    })
  }

}
