import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
//import {AppState} from "../todo.reducer";
import {Store} from "@ngrx/store";
import {DeleteTodoAction, EditTodoAction, ToggleTodoAction} from "../todo.actions";
import { AppState } from '../../../store/reducers/app.reducer';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  imports: [ReactiveFormsModule, NgClass],
  styleUrls: ['./item.component.scss'],
  standalone: true
})
export class ItemComponent implements OnInit {
  @Input('todo') todo!: Todo;

  @ViewChild('contentInput', {static:true}) contentInput!: ElementRef;

  chkField!: FormControl;
  content!: FormControl;
  editing!: boolean;

  constructor(@Inject(Store) private  store: Store<AppState>) {
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
