import { Component, Inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../../store/reducers/app.reducer';
import { SetFilterAction } from '../filter/filter.actions';
import { DeleteAllCompletedTodoAction } from "../todo.actions";
import { selectFilter, selectPendingTodos } from '../todo.selectors';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',

  imports: [AsyncPipe, NgClass, NgFor],
  styleUrls: ['./footer.component.scss'],
  standalone: true
})
export class FooterComponent implements OnInit {

  filterTypes: ('completed' | 'pending' | 'all') [] = ['all', 'completed', 'pending'];
  selectedFilter$: Observable<'completed' | 'pending' | 'all' > = of('all');
  pendingTodos$?: Observable<number>;

  constructor(@Inject(Store)private store: Store<AppState>) {
  }

  ngOnInit() {
    this.selectedFilter$ = this.store.pipe(select(selectFilter));
    this.pendingTodos$ = this.store.pipe(select(selectPendingTodos));
  }

  changeFilter(filter: 'completed' | 'pending' | 'all' ): void {
    this.store.dispatch(new SetFilterAction(filter));
  }

  clearCompletedTodos(): void {
    this.store.dispatch(new DeleteAllCompletedTodoAction());
  }

}
