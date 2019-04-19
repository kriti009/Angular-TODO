import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todos : Todo[]
  constructor(private todoService : TodoService ) { }

  ngOnInit() {
    this.todoService
      .getTodos()
      .then((todos: Todo[]) => {
        this.todos = todos.map((todo) => {
          // if (!todo.phone) {
          //   contact.phone = {
          //     mobile: '',
          //     work: ''
          //   }
          // }
          return todo;
        });
      });
  }

}
