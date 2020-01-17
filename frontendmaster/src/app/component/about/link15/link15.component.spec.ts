import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link15Component } from './link15.component';

describe('Link15Component', () => {
  let component: Link15Component;
  let fixture: ComponentFixture<Link15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
