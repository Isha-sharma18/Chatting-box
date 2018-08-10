import { TestBed, inject } from '@angular/core/testing';

import { AuthnewService } from './authnew.service';

describe('AuthnewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthnewService]
    });
  });

  it('should be created', inject([AuthnewService], (service: AuthnewService) => {
    expect(service).toBeTruthy();
  }));
});
