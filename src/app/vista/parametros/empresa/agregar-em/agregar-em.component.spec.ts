import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEmComponent } from './agregar-em.component';

describe('AgregarEmComponent', () => {
  let component: AgregarEmComponent;
  let fixture: ComponentFixture<AgregarEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
