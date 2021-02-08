import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdmin2Component } from './home-admin2.component';

describe('HomeAdmin2Component', () => {
  let component: HomeAdmin2Component;
  let fixture: ComponentFixture<HomeAdmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdmin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
