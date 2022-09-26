import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  form!: FormGroup;
  todoArrayCtrl!: FormArray;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
    this.todoArrayCtrl = this.fb.array([], [Validators.minLength(1)]);
    // contains formgroups
    this.form = this.fb.group({
      todos: this.todoArrayCtrl,
      name: this.fb.control<string>('', [Validators.required]),
    });
  }

  addTodo() {
    const todo = this.fb.group({
      task: this.fb.control<string>('', [Validators.required]),
      priority: this.fb.control<string>('', [Validators.required]),
    });
    this.todoArrayCtrl.push(todo);
  }

  processForm() {
    console.info(this.form.value);
  }

  getValues() {
    return this.form.value;
  }

  get invalid() {
    return this.form.invalid;
  }
}
