import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BflocationComponent } from './bflocation.component';

describe('BflocationComponent', () => {
  let component: BflocationComponent;
  let fixture: ComponentFixture<BflocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BflocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BflocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
