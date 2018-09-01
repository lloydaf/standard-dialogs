import { TestBed, inject } from '@angular/core/testing';

import { CustomPromptService } from './custom-prompt.service';

describe('CustomPromptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomPromptService]
    });
  });

  it('should be created', inject([CustomPromptService], (service: CustomPromptService) => {
    expect(service).toBeTruthy();
  }));
});
