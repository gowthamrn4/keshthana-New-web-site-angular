import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusintroductionComponent } from './aboutusintroduction.component';

describe('AboutusintroductionComponent', () => {
  let component: AboutusintroductionComponent;
  let fixture: ComponentFixture<AboutusintroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusintroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
