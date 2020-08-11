import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AegComponent } from './aeg.component';

describe('AegComponent', () => {
  let component: AegComponent;
  let fixture: ComponentFixture<AegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
