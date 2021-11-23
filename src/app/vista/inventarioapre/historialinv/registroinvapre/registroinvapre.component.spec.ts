import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroinvapreComponent } from './registroinvapre.component';

describe('RegistroinvapreComponent', () => {
  let component: RegistroinvapreComponent;
  let fixture: ComponentFixture<RegistroinvapreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroinvapreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroinvapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
