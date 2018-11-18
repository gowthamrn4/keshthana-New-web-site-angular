import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BffloorplanComponent } from './bffloorplan.component';

describe('BffloorplanComponent', () => {
  let component: BffloorplanComponent;
  let fixture: ComponentFixture<BffloorplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BffloorplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BffloorplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
