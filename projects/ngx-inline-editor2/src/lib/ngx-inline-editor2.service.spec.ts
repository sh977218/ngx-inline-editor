import { TestBed } from '@angular/core/testing';

import { NgxInlineEditor2Service } from './ngx-inline-editor2.service';

describe('NgxInlineEditor2Service', () => {
  let service: NgxInlineEditor2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInlineEditor2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
