import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAmbienteComponent } from './agregar-ambiente.component';

describe('AgregarAmbienteComponent', () => {
  let component: AgregarAmbienteComponent;
  let fixture: ComponentFixture<AgregarAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
