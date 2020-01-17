import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link8Component } from './link8.component';

describe('Link8Component', () => {
  let component: Link8Component;
  let fixture: ComponentFixture<Link8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
