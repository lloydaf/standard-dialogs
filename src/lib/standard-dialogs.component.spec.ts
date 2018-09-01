import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardDialogsComponent } from './standard-dialogs.component';

describe('StandardDialogsComponent', () => {
  let component: StandardDialogsComponent;
  let fixture: ComponentFixture<StandardDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
