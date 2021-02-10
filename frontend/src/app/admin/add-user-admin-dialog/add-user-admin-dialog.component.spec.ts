import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAdminDialogComponent } from './add-user-admin-dialog.component';

describe('AddUserAdminDialogComponent', () => {
  let component: AddUserAdminDialogComponent;
  let fixture: ComponentFixture<AddUserAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
