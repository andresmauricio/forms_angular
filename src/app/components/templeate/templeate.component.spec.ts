import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleateComponent } from './templeate.component';

describe('TempleateComponent', () => {
  let component: TempleateComponent;
  let fixture: ComponentFixture<TempleateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
