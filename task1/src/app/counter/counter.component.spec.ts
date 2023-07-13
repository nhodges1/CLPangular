import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './counter.component';

describe('ComponentComponent', () => {
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentComponent]
    });
    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
