import { Component, OnInit } from '@angular/core';
import { toDo } from './todo';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Observable, Subscription } from 'rxjs';
import { TodoService } from './todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: toDo;
  todoForm: FormGroup;
  private sub: Subscription;
  errorMessage: string;
  title: string;

  constructor(private fb: FormBuilder,
              private todoService: TodoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: '',
      description: '',
      priority: ''
    });

    const id = String(this.route.snapshot.paramMap.get('id')!);
    console.log(id);
    this.getTodo(id);
  }

  save() {
    console.log('Saved: ' + JSON.stringify(this.todoForm.value))
    if(this.todoForm.valid){
      if(this.todoForm.dirty){

        const td = {...this.todo, ...this.todoForm.value};

        if(td.id === 0){
          console.log('create');
          this.todoService.createTodo(td)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            })
        }
        else{
          console.log('update');
          this.todoService.updateTodo(td)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      }
      else{
        this.onSaveComplete();
      }
    }
    else {
      this.errorMessage = 'Please correct validateion errors.'
    }
  }

  onSaveComplete(): void {
    this.todoForm.reset();
    this.router.navigate(['/incomplete'])
  }

  getTodo(id: string): void {
    this.todoService.getTodo(id)
      .subscribe({
        next: (todo: toDo) => this.displayToDo(todo),
        error: err=> this.errorMessage = err
      })
  }

  displayToDo(todo: toDo): void {
    if (this.todoForm){
      this.todoForm.reset();
    }
    this.todo = todo;

    if(this.todo.id === 0) {
      this.title = 'Add To Do';
    }
    else {
      this.title = `Edit To Do: ${this.todo.title}`
    }

    this.todoForm.patchValue({
      title: this.todo.title,
      description: this.todo.description,
      priority: this.todo.priority
    })
  }

  

  onBack() {
    this.router.navigate(['/incomplete']);
  }
}
