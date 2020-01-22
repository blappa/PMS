import { TestBed } from '@angular/core/testing';

import { DoctorscheduleService } from './doctorschedule.service';

describe('DoctorscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorscheduleService = TestBed.get(DoctorscheduleService);
    expect(service).toBeTruthy();
  });
});
