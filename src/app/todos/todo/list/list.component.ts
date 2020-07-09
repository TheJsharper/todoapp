import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
//import {AppState} from "../todo.reducer";
import { Store, select } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import { FilterType } from "../filter/filter.actions";
import { AppState } from 'src/app/store/reducers/app.reducer';
import { selectTodos, selectFilter } from '../todo.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filterType: Observable<FilterType>;
  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.todos = this.store.pipe(select(selectTodos));
    this.filterType = this.store.pipe(select(selectFilter));
  }

}
