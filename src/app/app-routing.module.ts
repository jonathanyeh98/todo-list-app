import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo/todo-details.component';
import { TodoDetailsGuard } from './todo/todo-details.guard';
import { TodoFormComponent } from './todo/todo-form.component';
import { CompleteTodoListComponent } from './todo/todo-list-complete.component';
import { IncompleteTodoListComponent } from './todo/todo-list-incomplete.component';

const routes: Routes = [
  {path: 'add/:id', component: TodoFormComponent},
  {path: 'add', redirectTo: 'add/0', pathMatch: 'full'},
  {path: 'incomplete', component: IncompleteTodoListComponent},
  {path: 'complete', component: CompleteTodoListComponent},
  {path: 'incomplete/:id', component: TodoDetailsComponent, canActivate: [TodoDetailsGuard]},
  {path: 'complete/:id', component: TodoDetailsComponent, canActivate: [TodoDetailsGuard]},
  {path: '', redirectTo: 'incomplete', pathMatch: 'full'},
  {path: '**', redirectTo: 'incomplete', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
