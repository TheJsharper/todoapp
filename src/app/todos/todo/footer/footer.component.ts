import {Component, OnInit} from '@angular/core';
import {FilterType, SetFilterAction} from '../filter/filter.actions';
import {AppState} from '../todo.reducer';
import {Store} from '@ngrx/store';
import {map, filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  filterTypes: FilterType[] = ['all', 'completed', 'pending'];
  selectedFilter$: Observable<FilterType>;
  pendingTodos$: Observable<number>;

  constructor(private  store: Store<AppState>) {
  }

  ngOnInit() {
    this.selectedFilter$ = this.store.select('filter').pipe(map((filter: FilterType) => filter));
    this.pendingTodos$ = this.store.select('todos').pipe(map((todos: Todo[]) => {
      return todos.filter((todo: Todo) => !todo.completion).length;
    }));
  }

  changeFilter(filter: FilterType): void {
    this.store.dispatch(new SetFilterAction(filter));
  }

}
