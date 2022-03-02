import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toDo } from './todo';
import { Router } from '@angular/router';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  title: string = 'Details';
  todo: toDo | undefined;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private todoService: TodoService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      this.getTodo(id);
    }
  }

  getTodo(id: string): void {
    this.todoService.getTodo(id).subscribe({
      next: todo => this.todo = todo,
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/incomplete']);
  }

  onEdit(): void {
    this.router.navigate(['/add',this.todo?.id]);
  }

}
