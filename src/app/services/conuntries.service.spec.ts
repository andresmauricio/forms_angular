import { TestBed } from '@angular/core/testing';

import { ConuntriesService } from './conuntries.service';

describe('ConuntriesService', () => {
  let service: ConuntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConuntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
