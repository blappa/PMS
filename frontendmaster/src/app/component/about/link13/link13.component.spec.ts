import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link13Component } from './link13.component';

describe('Link13Component', () => {
  let component: Link13Component;
  let fixture: ComponentFixture<Link13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
