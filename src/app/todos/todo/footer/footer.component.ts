import { Component, OnInit } from '@angular/core';
//import {AppState} from '../todo.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { FilterType, SetFilterAction } from '../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { DeleteAllCompletedTodoAction } from "../todo.actions";
import { selectFilter, selectPendingTodos } from '../todo.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  filterTypes: FilterType[] = ['all', 'completed', 'pending'];
  selectedFilter$: Observable<FilterType>;
  pendingTodos$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.selectedFilter$ = this.store.pipe(select(selectFilter));
    this.pendingTodos$ = this.store.pipe(select(selectPendingTodos));
  }

  changeFilter(filter: FilterType): void {
    this.store.dispatch(new SetFilterAction(filter));
  }

  clearCompletedTodos(): void {
    this.store.dispatch(new DeleteAllCompletedTodoAction());
  }

}
