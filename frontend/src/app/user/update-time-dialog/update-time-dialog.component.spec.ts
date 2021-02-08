import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimeDialogComponent } from './update-time-dialog.component';

describe('UpdateTimeDialogComponent', () => {
  let component: UpdateTimeDialogComponent;
  let fixture: ComponentFixture<UpdateTimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTimeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
