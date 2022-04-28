import { TestBed } from '@angular/core/testing';

import { FlightCardServiceService } from './flight-card-service.service';

describe('MovieCardServiceService', () => {
  let service: FlightCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
