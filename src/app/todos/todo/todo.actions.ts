import {Action} from '@ngrx/store';

export const ADD_TODO: string = '[TODO] add todo';
export const TOGGLE_TODO: string = '[TODO] toggle todo';
export const EDIT_TODO: string = '[TODO] Edit todo';
export const DELETE_TODO: string = '[TODO] Delete todo';
export const TOGGLE_ALL_TODO: string = '[TODO] toggle all todo';
export const DELETE_COMPLETED_TODO: string = '[TODO] delete all completed todos';

export class AddTodoAction implements Action {
  readonly type: string = ADD_TODO;

  constructor(public content: string) {
  }
}


export class ToggleTodoAction implements Action {
  readonly type: string = TOGGLE_TODO;

  constructor(public id: number) {
  }
}


export class EditTodoAction implements Action {
  readonly type: string = EDIT_TODO;

  constructor(public id: number, public newContent: string) {
  }
}

export class DeleteTodoAction implements Action {
  readonly type: string = DELETE_TODO;

  constructor(public id: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  readonly type: string = TOGGLE_ALL_TODO;

}

export class DeleteAllCompletedTodoAction implements Action {
  readonly type: string = DELETE_COMPLETED_TODO;
}


export type TodoActions =
  AddTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | ToggleAllTodoAction
  | DeleteAllCompletedTodoAction;
