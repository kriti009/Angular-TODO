import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'http://localhost:8000/todo';
  constructor(private http: Http ) { }
  //get ('/todo')
  getTodos(): Promise<void | Todo[]> {
    return this.http.get(this.todosUrl)
               .toPromise()
               .then(response => response.json() as Todo[])
               .catch();
  }
  // post("/todo")
  createTodo(newTodo: Todo): Promise<void | Todo> {
    return this.http.post(this.todosUrl, newTodo)
               .toPromise()
               .then(response => response.json() as Todo)
               .catch();
  }
  // delete("/todo/delete/:id")
  deleteTodo(delTodoId: String): Promise<void | String> {
    return this.http.delete(this.todosUrl + '/' + delTodoId)
               .toPromise()
               .then(response => response.json() as String)
               .catch();
  }

}
