import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioapreComponent } from './usuarioapre.component';

describe('UsuarioapreComponent', () => {
  let component: UsuarioapreComponent;
  let fixture: ComponentFixture<UsuarioapreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioapreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
