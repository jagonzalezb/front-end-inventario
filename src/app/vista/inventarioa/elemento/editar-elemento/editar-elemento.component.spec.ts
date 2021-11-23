import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarElementoComponent } from './editar-elemento.component';

describe('EditarElementoComponent', () => {
  let component: EditarElementoComponent;
  let fixture: ComponentFixture<EditarElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
