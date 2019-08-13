import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIdeaComponent } from './select-idea.component';

describe('SelectIdeaComponent', () => {
  let component: SelectIdeaComponent;
  let fixture: ComponentFixture<SelectIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
