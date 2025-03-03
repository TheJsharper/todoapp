import { ActionReducerMap } from '@ngrx/store';
import { FilterType } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './models/todo.model';
import {
  AddTodoAction, ADD_TODO,
  DeleteAllCompletedTodoAction, DeleteTodoAction, DELETE_COMPLETED_TODO, DELETE_TODO,

  EditTodoAction, EDIT_TODO,

  TodoActions,
  ToggleAllTodoAction,
  ToggleTodoAction, TOGGLE_ALL_TODO,
  TOGGLE_TODO
} from './todo.actions';
import { AppState } from '../../store/reducers/app.reducer';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface TodosState extends AppState{
  todos: Todo[];
  filter: FilterType;
}

const initialState: Todo[] = [
  new Todo('Watch match barcelona vs. manU'),
  new Todo('Play with valentin'),
  new Todo('Go to shop')]
  .map((value: Todo, index: number) => {
    if (index === 2) {
      value.completion = true;
    }
    return value;
  }, );


export function todoReducer(state: Todo[] = initialState, action: TodoActions): Todo[] | any {


  switch (action.type) {


    case  ADD_TODO :
      if (action instanceof AddTodoAction) {
        const newTodo: Todo = new Todo(action.content);
        return [...state, newTodo];
      }
      break;


    case TOGGLE_TODO:
      if (action instanceof ToggleTodoAction) {
        return state.map((todo: Todo) => {
          if (todo.id === action.id) {
            const todoRef: Todo = {...todo, completion: !todo.completion};
            return todoRef;
          } else {
            return todo;
          }
        });
      }
      break;


    case EDIT_TODO:
      if (action instanceof EditTodoAction) {
        return state.map((todo: Todo) => {
          if (todo.id === action.id) {
            const todoRef: Todo = {...todo, content: action.newContent};
            return todoRef;
          } else {
            return todo;
          }
        });
      }
      break;

    case DELETE_TODO:
      if (action instanceof DeleteTodoAction) {
        return state.filter((todo: Todo) => todo.id !== action.id);
      }
      break;

    case TOGGLE_ALL_TODO:
      if (action instanceof ToggleAllTodoAction) {
        return state.map((todo: Todo) => {
          return {...todo, completion: !todo.completion}
        });
      }
      break;
    case  DELETE_COMPLETED_TODO:
      if (action instanceof DeleteAllCompletedTodoAction) {
        return state.filter((todo: Todo) => !todo.completion);
      }
      break;
    default: {
      return state;
    }
  }
}

export const reducers/*: ActionReducerMap<TodosState, Action<string>>*/ = {
  todos: todoReducer,
  filter: filterReducer
}
