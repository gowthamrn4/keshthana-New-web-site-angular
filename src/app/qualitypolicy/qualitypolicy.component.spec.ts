import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitypolicyComponent } from './qualitypolicy.component';

describe('QualitypolicyComponent', () => {
  let component: QualitypolicyComponent;
  let fixture: ComponentFixture<QualitypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
