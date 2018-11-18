import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfspecComponent } from './bfspec.component';

describe('BfspecComponent', () => {
  let component: BfspecComponent;
  let fixture: ComponentFixture<BfspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
