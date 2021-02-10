import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjetAdminDialogComponent } from './add-projet-admin-dialog.component';

describe('AddProjetAdminDialogComponent', () => {
  let component: AddProjetAdminDialogComponent;
  let fixture: ComponentFixture<AddProjetAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjetAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjetAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
