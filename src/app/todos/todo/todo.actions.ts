import {Action} from "@ngrx/store";

export const ADD_TODO = '[TODO] add toodo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public content: string) {
  }
}

export type TodoActions = AddTodoAction;
