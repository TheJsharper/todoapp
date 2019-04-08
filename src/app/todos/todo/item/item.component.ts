import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('todo') todo: Todo;

  constructor() {
  }

  ngOnInit() {
  }

}
