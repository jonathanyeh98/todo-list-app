import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toDo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list-complete',
  templateUrl: './todo-list-complete.component.html',
  styleUrls: ['./todo-list-complete.component.css']
})
export class CompleteTodoListComponent implements OnInit {
  @Input() viewingCompletedToDo: boolean = false;
  title: string = 'Todo List';
  toDoListC: any[] = [];
  errorMessage: string = '';

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe({
      next: toDoList => this.toDoListC = toDoList.filter(item => item.completed === true),
      error: err => this.errorMessage = err
    });
  }

  onIncomplete(todo: toDo): void {
    var indexToDelete: number = -1;
    todo.completed = false;

    const td = {...todo};

    if(td.id !== 0){
      console.log('update')
      this.todoService.updateTodo(td).subscribe({
        next: () => this.onIncompleted(),
        error: err => this.errorMessage = err
      });
    }
  }

  onIncompleted(): void {
    this.todoService.getTodoList().subscribe({
      next: toDoList => this.toDoListC = toDoList.filter(item => item.completed === false),
      error: err => this.errorMessage = err
    });;
    this.router.navigate(['/incomplete'])
  }
}
