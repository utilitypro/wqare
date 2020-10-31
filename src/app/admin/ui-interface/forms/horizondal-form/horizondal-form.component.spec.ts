import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizondalFormComponent } from './horizondal-form.component';

describe('HorizondalFormComponent', () => {
  let component: HorizondalFormComponent;
  let fixture: ComponentFixture<HorizondalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizondalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizondalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
