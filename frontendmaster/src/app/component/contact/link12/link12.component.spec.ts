import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Link12Component } from './link12.component';

describe('Link12Component', () => {
  let component: Link12Component;
  let fixture: ComponentFixture<Link12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Link12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
