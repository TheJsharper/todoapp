import {Action} from "@ngrx/store";

export const ADD_TODO = '[TODO] add todo';
export const TOGGLE_TODO = '[TODO] toggle todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public content: string) {
  }
}


export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export type TodoActions = AddTodoAction | ToggleTodoAction;
