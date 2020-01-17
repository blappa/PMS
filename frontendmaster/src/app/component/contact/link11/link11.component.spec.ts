import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link11Component } from './link11.component';

describe('Link11Component', () => {
  let component: Link11Component;
  let fixture: ComponentFixture<Link11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
