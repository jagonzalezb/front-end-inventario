import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSedComponent } from './editar-sed.component';

describe('EditarSedComponent', () => {
  let component: EditarSedComponent;
  let fixture: ComponentFixture<EditarSedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
