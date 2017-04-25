import { TestBed, inject } from '@angular/core/testing';

import { RegexBuilderService } from './regex-builder.service';

describe('RegexBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegexBuilderService]
    });
  });

  it('should ...', inject([RegexBuilderService], (service: RegexBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
