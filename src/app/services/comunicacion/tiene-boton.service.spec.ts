import { TestBed } from '@angular/core/testing';

import { TieneBotonService } from './tiene-boton.service';

describe('TieneBotonService', () => {
  let service: TieneBotonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TieneBotonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
