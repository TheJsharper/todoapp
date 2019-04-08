import {ADD_TODO, TodoActions} from "./todo.actions";
import {Todo} from "./models/todo.model";
import {ADD_TODO} from './todo.actions'

export interface AppState {
  todos: Todo[];
}

const initialState: Todo[] = [new Todo('Vender a Real Madrid'), new Todo('Jugar con valentin'), new Todo('ir de compra')];

export function todoReducer(state: Todo[] = initialState, action: TodoActions): Todo[] {
  switch (action.type) {
    case  ADD_TODO :
      const newTodo: Todo = new Todo(action.content);
      return [...state, newTodo];
    default: {
      return state;
    }
  }
}
