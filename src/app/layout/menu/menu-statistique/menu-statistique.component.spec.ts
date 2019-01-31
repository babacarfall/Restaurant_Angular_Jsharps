import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStatistiqueComponent } from './menu-statistique.component';

describe('MenuStatistiqueComponent', () => {
  let component: MenuStatistiqueComponent;
  let fixture: ComponentFixture<MenuStatistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStatistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
