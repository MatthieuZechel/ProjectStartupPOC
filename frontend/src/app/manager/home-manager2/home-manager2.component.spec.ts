import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeManager2Component } from './home-manager2.component';

describe('HomeManager2Component', () => {
  let component: HomeManager2Component;
  let fixture: ComponentFixture<HomeManager2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeManager2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeManager2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
