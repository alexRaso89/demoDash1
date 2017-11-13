import { TestBed, inject } from '@angular/core/testing';

import { UpdateServerService } from './update-server.service';

describe('UpdateServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateServerService]
    });
  });

  it('should be created', inject([UpdateServerService], (service: UpdateServerService) => {
    expect(service).toBeTruthy();
  }));
});
