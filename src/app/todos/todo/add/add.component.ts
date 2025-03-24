import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { AppState } from '../../../store/reducers/app.reducer';
import { AddTodoAction } from "../todo.actions";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./add.component.scss'],
  standalone: true
})
export class AddComponent {
  contentInput: FormControl<string |null> ;

  constructor(@Inject(Store)private store: Store<AppState>) {
    this.contentInput = new FormControl<string | null>(null, Validators.required);
  }

 
  addTodo(): void {
    if (this.contentInput?.invalid) return;

    const action: AddTodoAction = new AddTodoAction(this.contentInput.value??'');
    this.store.dispatch(action);
    this.contentInput?.setValue('');

  }

}
