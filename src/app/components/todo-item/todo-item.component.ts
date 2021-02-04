import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, TodoItem } from 'src/app/services/data.service';
import { ComponentUtility } from '../common/component-utility';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent extends ComponentUtility implements OnInit {
  public todoItem: TodoItem;

  constructor(private data: DataService,
    private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.getTodoItemById(parseInt(id, 10)).subscribe(t => {
      this.todoItem = t;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
