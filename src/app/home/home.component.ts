import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/data-acces/todo.services';
import { TodoListComponent } from './ui/todo-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h2>Todo</h2>
    <app-todo-form (todoSubmited)="todoService.addTodo($event)" />
    <app-todo-list [todos]="todoService.todos()" />
  `,
  imports: [TodoFormComponent, TodoListComponent],
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
