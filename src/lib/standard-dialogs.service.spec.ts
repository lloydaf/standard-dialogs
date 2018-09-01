import { TestBed, inject } from '@angular/core/testing';

import { StandardDialogsService } from './standard-dialogs.service';

describe('StandardDialogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandardDialogsService]
    });
  });

  it('should be created', inject([StandardDialogsService], (service: StandardDialogsService) => {
    expect(service).toBeTruthy();
  }));
});
