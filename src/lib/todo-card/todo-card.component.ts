import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.less',
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;
  @Output()
  deleteEvent = new EventEmitter<void>();

  onToggleDone() {
    this.todo.done = !this.todo.done;
  }

  onDelete() {
    this.deleteEvent.emit()
  }
}

export type Todo = { done: boolean; text: string };
