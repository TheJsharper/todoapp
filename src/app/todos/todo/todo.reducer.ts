import {ADD_TODO, TodoActions, TOGGLE_TODO} from './todo.actions';
import {Todo} from './models/todo.model';

export interface AppState {
  todos: Todo[];
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
  });


export function todoReducer(state: Todo[] = initialState, action: TodoActions): Todo[] {
  switch (action.type) {
    case  ADD_TODO :
      const newTodo: Todo = new Todo(action.content);
      return [...state, newTodo];
    case TOGGLE_TODO:
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          const todoRef: Todo = {...todo, completion: !todo.completion};
          return todoRef;
        } else {
          return todo;
        }
      });
    default: {
      return state;
    }
  }
}
