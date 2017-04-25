import { TestBed, inject } from '@angular/core/testing';

import { RegexpDataService } from './regexp-data.service';

describe('RegexpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegexpDataService]
    });
  });

  it('should ...', inject([RegexpDataService], (service: RegexpDataService) => {
    expect(service).toBeTruthy();
  }));
});
