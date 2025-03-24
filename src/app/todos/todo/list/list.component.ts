import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable, of } from 'rxjs';
import { AppState } from '../../../store/reducers/app.reducer';
import { Todo } from "../models/todo.model";
import { selectFilter, selectTodos } from '../todo.selectors';
import { ItemComponent } from '../item';
import { FilterPipe } from '../filter';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, FilterPipe, AsyncPipe, NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filterType: Observable<'completed' | 'pending' | 'all' > = of('all');

  todos?: Observable<Todo[]>// = of([]);

  constructor(@Inject(Store) private store: Store<AppState>) {

  }

  ngOnInit() {
    this.todos = this.store.pipe(select(selectTodos));

    this.filterType = this.store.pipe(select(selectFilter));
  }

}
