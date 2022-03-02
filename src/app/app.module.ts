import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncompleteTodoListComponent } from './todo/todo-list-incomplete.component';
import { CompleteTodoListComponent } from './todo/todo-list-complete.component';
import { TodoDetailsComponent } from './todo/todo-details.component';
import { TodoFormComponent } from './todo/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    IncompleteTodoListComponent,
    CompleteTodoListComponent,
    TodoDetailsComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
