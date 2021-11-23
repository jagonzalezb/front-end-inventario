import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAmbienteComponent } from './editar-ambiente.component';

describe('EditarAmbienteComponent', () => {
  let component: EditarAmbienteComponent;
  let fixture: ComponentFixture<EditarAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
