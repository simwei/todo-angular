import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterOutlet} from '@angular/router';
import {Todo, TodoCardComponent} from '../lib/todo-card/todo-card.component';
import {MatToolbar} from '@angular/material/toolbar';
import {TodoInputCardComponent} from '../lib/todo-input-card/todo-input-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoCardComponent, MatListModule, MatToolbar, TodoInputCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'todo';
  todos: Todo[] = [
    {done: true, text: 'display todos'},
    {done: true, text: 'add todo'},
    {done: true, text: 'toggle done'},
    {done: false, text: 'drag and drop'},
  ];


  deleteTodo(todo: Todo) {
    console.log("filter")
    this.todos = this.todos.filter(item => todo !== item);
    return todo;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}
