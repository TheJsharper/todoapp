import {Component, OnInit} from '@angular/core';
import {AppState} from "../todo.reducer";
import {Store} from "@ngrx/store";
import {Todo} from "../models/todo.model";
import {FilterType} from "../filter/filter.actions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  filterType: FilterType

  constructor(private  store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.subscribe((state: AppState) => {
      this.filterType = state.filter;
      this.todos = state.todos;
    });
  }

}
