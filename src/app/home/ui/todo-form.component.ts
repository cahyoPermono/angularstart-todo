import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo, Todo } from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmited.emit(todoForm.getRawValue())"
    >
      <input type="text" formControlName="title" placeholder="title..." />
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />
      <button [disabled]="!todoForm.valid" type="submit">Add Todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class TodoFormComponent {
  @Output() todoSubmited = new EventEmitter<CreateTodo>();
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
