import { TestBed, inject } from '@angular/core/testing';

import { AlertPromptService } from './alert-prompt.service';

describe('AlertPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertPromptService]
    });
  });

  it('should be created', inject([AlertPromptService], (service: AlertPromptService) => {
    expect(service).toBeTruthy();
  }));
});
