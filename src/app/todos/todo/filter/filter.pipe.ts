import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../models/todo.model';
import {FilterType} from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: FilterType): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter((todo: Todo) => todo.completion);
      case 'pending':
        return todos.filter((todo: Todo) => !todo.completion);
      default: {
        return todos;
      }
    }
  }

}
