import { Component } from '@angular/core';
import { IncompleteTodoListComponent } from './todo/todo-list-incomplete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TooDooList';
}
