import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<Todo[]>([
    {
      id: 'jfsad2jdldi',
      title: 'First Item',
      description: 'This is a description',
    },
  ]);

  addTodo(todo: Todo) {
    const newTodos = [...this.todos$.value, todo];
    this.todos$.next(newTodos);
  }

  getTodoById(id: string) {
    return this.todos$.pipe(
      map((todos) => todos.find((todo) => todo.id === id))
    );
  }

  delete(id: string) {
    const todos = this.todos$.value;
    todos.splice(
      todos.findIndex((todo) => todo.id === id),
      1
    );
    this.todos$.next(todos);
  }
}
