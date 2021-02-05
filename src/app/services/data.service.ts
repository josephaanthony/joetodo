import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface TodoItem {
  id: number;
  message: string;
  status: string;
  date: Date;
  targetDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public todoItems: TodoItem[] = [
    {
      id: 0,
      message: 'First Todo.',
      status: null,
      date: new Date(),
      targetDate: new Date()
    },
    {
      id: 1,
      message: 'Second Todo',
      status: null,
      date: new Date(),
      targetDate: new Date()
    }     
  ];

  constructor() { }

  public getTodoItems(): Observable<TodoItem[]> {
    return of(this.todoItems);
  }

  public getTodoItemById(id: number): Observable<TodoItem> {
    return of(this.todoItems.find(t => t.id === id));
  }
}
