import {Component, Inject, OnInit} from '@angular/core';
//import {AppState} from "./todo.reducer";
import {Store} from '@ngrx/store';
import {ToggleAllTodoAction} from "./todo.actions";
import { AppState } from '../../store/reducers/app.reducer';
import { AddComponent, FilterPipe, FooterComponent, ItemComponent, ListComponent, PageFooterComponent } from './';

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [  ListComponent,  FooterComponent, PageFooterComponent, AddComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( @Inject(Store)private  store: Store<AppState>) {
  }

  ngOnInit() {
  }

  toggleAll(): void {
  this.store.dispatch(new ToggleAllTodoAction());
  }
}
