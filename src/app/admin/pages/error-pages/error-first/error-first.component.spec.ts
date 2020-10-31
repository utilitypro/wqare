import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFirstComponent } from './error-first.component';

describe('ErrorFirstComponent', () => {
  let component: ErrorFirstComponent;
  let fixture: ComponentFixture<ErrorFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
