import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInlineEditor2Component } from './ngx-inline-editor2.component';

describe('NgxInlineEditor2Component', () => {
  let component: NgxInlineEditor2Component;
  let fixture: ComponentFixture<NgxInlineEditor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInlineEditor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInlineEditor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
