import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import {AppState} from "../todo.reducer";
import {Store} from "@ngrx/store";
import {AddTodoAction} from "../todo.actions";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  contentInput: FormControl;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.contentInput = new FormControl('', Validators.required);
  }

  addTodo(): void {
    if (this.contentInput.invalid) return;

    const action: AddTodoAction = new AddTodoAction(this.contentInput.value);
    this.store.dispatch(action);
    this.contentInput.setValue('');

  }

}
