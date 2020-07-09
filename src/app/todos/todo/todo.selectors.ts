import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/app.reducer';
import { TodosState } from './todo.reducer';
import { Todo } from './models/todo.model';
import { FilterType } from './filter/filter.actions';

export const selectFeature: MemoizedSelector<AppState, TodosState> = createFeatureSelector('todos');

export const selectTodos: MemoizedSelector<TodosState, Todo[]> = createSelector(selectFeature, (todos: TodosState) => todos.todos);
export const selectFilter: MemoizedSelector<TodosState, FilterType> = createSelector(selectFeature, (t: TodosState) => t.filter);
//this.selectedFilter$ = this.store.select('filter').pipe(map((filter: FilterType) => filter));
//export const selectedFilter:= createSelector(selectFeature,(state:TodosState)=> state.filter )

export const selectPendingTodos:MemoizedSelector<TodosState, number> = createSelector(selectFeature, (state:TodosState)=> state.todos.filter((todo:Todo)=> !todo.completion).length)