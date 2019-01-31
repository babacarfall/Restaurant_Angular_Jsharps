import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePlatComponent } from './type-plat.component';

describe('TypePlatComponent', () => {
  let component: TypePlatComponent;
  let fixture: ComponentFixture<TypePlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
