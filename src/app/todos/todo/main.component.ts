import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers/app.reducer';
import { AddComponent, FooterComponent, ListComponent } from './';
import { ToggleAllTodoAction } from "./todo.actions";

@Component({
    selector: 'app-todo-main',
    imports: [ListComponent, FooterComponent, AddComponent],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor( @Inject(Store)private  store: Store<AppState>) {
  }


  toggleAll(): void {
  this.store.dispatch(new ToggleAllTodoAction());
  }
}
