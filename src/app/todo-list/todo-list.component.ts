import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoValue: string;
  idValue: number;
  constructor() { }

  ngOnInit() {

    this.idValue = 2;

    this.todos = [
      {
        'id': 1,
        'title': 'Learn Angular',
        'completed': true
      },
      {
        'id': 2,
        'title': 'Do laundry',
        'completed': false
      },
    ];
  }
  addTodo() {
    if (this.todoValue.length != 0) {
      this.idValue++;
      this.todos.push({
        id: this.idValue,
        title: this.todoValue,
        completed: false
      });
    }
    this.todoValue ="";
  }

  removeTodo(id:number) : void {
    this.todos = this.todos.filter(todo => todo.id != id)
  }

  
}
