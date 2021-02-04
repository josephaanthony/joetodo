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
  header: string;
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
      header: 'First Item',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: null,
      date: new Date(),
      targetDate: new Date()
    },
    {
      id: 1,
      header: 'Second Item',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

  public getMessages(): Message[] {
    return null;
  }

  public getMessageById(id: number): Message {
    return null;
  }
}
