import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityPickerComponent } from './priority-picker.component';

describe('PriorityPickerComponent', () => {
  let component: PriorityPickerComponent;
  let fixture: ComponentFixture<PriorityPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
