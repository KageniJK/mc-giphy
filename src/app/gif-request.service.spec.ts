import { TestBed, inject } from '@angular/core/testing';

import { GifRequestService } from './gif-request.service';

describe('GifRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifRequestService]
    });
  });

  it('should be created', inject([GifRequestService], (service: GifRequestService) => {
    expect(service).toBeTruthy();
  }));
});
