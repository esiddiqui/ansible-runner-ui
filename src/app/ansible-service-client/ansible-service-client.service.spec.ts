import { TestBed } from '@angular/core/testing';

import { AnsibleServiceClientService } from './ansible-service-client.service';

describe('AnsibleServiceClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnsibleServiceClientService = TestBed.get(AnsibleServiceClientService);
    expect(service).toBeTruthy();
  });
});
