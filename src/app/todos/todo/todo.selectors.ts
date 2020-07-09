import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import { FilterType } from './filter/filter.actions';
import { Todo } from './models/todo.model';
import { TodosState } from './todo.reducer';

export const selectFeature: MemoizedSelector<AppState, TodosState> = createFeatureSelector('todos');

export const selectTodos: MemoizedSelector<TodosState, Todo[], DefaultProjectorFn<Todo[]>> = createSelector(selectFeature, (todos: TodosState) => todos.todos);
export const selectFilter: MemoizedSelector<TodosState, FilterType, DefaultProjectorFn<FilterType>> = createSelector(selectFeature, (t: TodosState) => t.filter);


export const selectPendingTodos:MemoizedSelector<TodosState, number, DefaultProjectorFn<number>> = createSelector(selectFeature, (state:TodosState)=> state.todos.filter((todo:Todo)=> !todo.completion).length)