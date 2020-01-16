import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link14Component } from './link14.component';

describe('Link14Component', () => {
  let component: Link14Component;
  let fixture: ComponentFixture<Link14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
