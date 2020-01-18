import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link10Component } from './link10.component';

describe('Link10Component', () => {
  let component: Link10Component;
  let fixture: ComponentFixture<Link10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
