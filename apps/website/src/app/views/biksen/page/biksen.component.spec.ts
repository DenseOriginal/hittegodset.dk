import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { biksenComponent } from './biksen.component';

describe('biksenComponent', () => {
  let component: biksenComponent;
  let fixture: ComponentFixture<biksenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ biksenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(biksenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
