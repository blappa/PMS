import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link7Component } from './link7.component';

describe('Link7Component', () => {
  let component: Link7Component;
  let fixture: ComponentFixture<Link7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
