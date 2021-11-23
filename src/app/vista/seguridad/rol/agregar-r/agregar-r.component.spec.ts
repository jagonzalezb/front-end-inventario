import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRComponent } from './agregar-r.component';

describe('AgregarRComponent', () => {
  let component: AgregarRComponent;
  let fixture: ComponentFixture<AgregarRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
