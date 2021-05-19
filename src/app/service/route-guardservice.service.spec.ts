import { TestBed } from '@angular/core/testing';

import { RouteGuardserviceService } from './route-guardservice.service';

describe('RouteGuardserviceService', () => {
  let service: RouteGuardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
