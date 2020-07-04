import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {AppState} from "../todo.reducer";
import {Store} from "@ngrx/store";
import {DeleteTodoAction, EditTodoAction, ToggleTodoAction} from "../todo.actions";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('todo') todo: Todo;

  @ViewChild('contentInput', {static:true}) contentInput: ElementRef;

  chkField: FormControl;
  content: FormControl;
  editing: boolean;

  constructor(private  store: Store<AppState>) {
  }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completion);
    this.content = new FormControl(this.todo.content, Validators.required);
    this.chkField.valueChanges.subscribe((value: boolean) => this.store.dispatch(new ToggleTodoAction(this.todo.id)));
  }

  edit(): void {
    this.editing = true;
    setTimeout(() => {
      this.contentInput.nativeElement.select();
    }, 20);

  }

  leave(): void {
    this.editing = false;
    this.store.dispatch(new EditTodoAction(this.todo.id, this.content.value));
  }

  deleteTodo(): void {
      this.store.dispatch(new DeleteTodoAction(this.todo.id));
  }
}
