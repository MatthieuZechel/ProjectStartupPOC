import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPdfComponent } from './manager-pdf.component';

describe('ManagerPdfComponent', () => {
  let component: ManagerPdfComponent;
  let fixture: ComponentFixture<ManagerPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
