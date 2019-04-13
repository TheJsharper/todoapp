import {Action} from '@ngrx/store';

export const ADD_TODO: string = '[TODO] add todo';
export const TOGGLE_TODO: string = '[TODO] toggle todo';
export const EDIT_TODO: string = '[TODO] Edit todo';
export const DELETE_TODO: string = '[TODO] Delete todo';

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

export type TodoActions = AddTodoAction | ToggleTodoAction | EditTodoAction;
