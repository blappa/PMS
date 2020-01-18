import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link6Component } from './link6.component';

describe('Link6Component', () => {
  let component: Link6Component;
  let fixture: ComponentFixture<Link6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
