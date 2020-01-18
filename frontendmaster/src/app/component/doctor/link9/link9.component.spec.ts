import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link9Component } from './link9.component';

describe('Link9Component', () => {
  let component: Link9Component;
  let fixture: ComponentFixture<Link9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
