import { TestBed } from '@angular/core/testing';

import { ApioficeandfireService } from './apioficeandfire.service';

describe('ApioficeandfireService', () => {
  let service: ApioficeandfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApioficeandfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
