import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link16Component } from './link16.component';

describe('Link16Component', () => {
  let component: Link16Component;
  let fixture: ComponentFixture<Link16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
