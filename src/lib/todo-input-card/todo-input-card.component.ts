import {Component, EventEmitter, Output} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Todo} from '../todo-card/todo-card.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-input-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatCardActions,
    MatIconButton,
    MatIcon,
    FormsModule
  ],
  templateUrl: './todo-input-card.component.html',
  styleUrl: './todo-input-card.component.less'
})
export class TodoInputCardComponent {
  @Output()
  submitTodo = new EventEmitter<Todo>();

  text = "";

  onAdd() {
    if (this.text.length) {
      this.submitTodo.emit({text: this.text, done: false})
      this.text = ""
    }
  }
}
