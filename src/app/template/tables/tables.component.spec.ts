import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponent } from './tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableHeaderComponent } from './table-header';
import { RouterTestingModule } from '@angular/router/testing';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule,RouterTestingModule],
      declarations: [ TablesComponent,TableHeaderComponent ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
