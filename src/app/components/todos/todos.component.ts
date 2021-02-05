import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../services/data.service';
import { ComponentUtility } from '../common/component-utility';
import * as moment from 'moment';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent extends ComponentUtility implements OnInit {
  momentjs: any = moment;

  @Input() todos: TodoItem[];

  constructor() {
    super();
  }

  ngOnInit() {}

}
