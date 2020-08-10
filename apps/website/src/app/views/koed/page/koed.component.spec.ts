import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoedComponent } from './koed.component';

describe('KoedComponent', () => {
  let component: KoedComponent;
  let fixture: ComponentFixture<KoedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
