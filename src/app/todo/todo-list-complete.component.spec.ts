import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTodoListComponent } from './todo-list-complete.component';

describe('CompleteTodoListComponent', () => {
  let component: CompleteTodoListComponent;
  let fixture: ComponentFixture<CompleteTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
