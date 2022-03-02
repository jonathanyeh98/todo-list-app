import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toDo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list-incomplete.component.html',
  styleUrls: ['./todo-list-incomplete.component.css'],

})
export class IncompleteTodoListComponent implements OnInit {
  @Input() viewingCompletedToDo: boolean = false;
  title: string = 'Todo List';
  toDoListI: toDo[] = [];
  errorMessage: string = '';

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe({
      next: toDoList => this.toDoListI = toDoList.filter(item => item.completed === false),
      error: err => this.errorMessage = err
    });
  }

  onComplete(todo: toDo): void {
    var indexToDelete: number = -1;
    todo.completed = true;

    const td = {...todo};

    if(td.id !== 0){
      console.log('update')
      this.todoService.updateTodo(td).subscribe({
        next: () => this.onCompleted(),
        error: err => this.errorMessage = err
      });
    }
  }

  onCompleted(): void {
    this.todoService.getTodoList().subscribe({
      next: toDoList => this.toDoListI = toDoList.filter(item => item.completed === false),
      error: err => this.errorMessage = err
    });;
    this.router.navigate(['/complete'])
  }
}
