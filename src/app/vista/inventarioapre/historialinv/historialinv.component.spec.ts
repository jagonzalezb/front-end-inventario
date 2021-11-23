import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialinvComponent } from './historialinv.component';

describe('HistorialinvComponent', () => {
  let component: HistorialinvComponent;
  let fixture: ComponentFixture<HistorialinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialinvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
