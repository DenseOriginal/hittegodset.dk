import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoekkenhaverComponent } from './koekkenhaver.component';

describe('KoekkenhaverComponent', () => {
  let component: KoekkenhaverComponent;
  let fixture: ComponentFixture<KoekkenhaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoekkenhaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoekkenhaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
