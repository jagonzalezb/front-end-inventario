import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioapreComponent } from './inventarioapre.component';

describe('InventarioapreComponent', () => {
  let component: InventarioapreComponent;
  let fixture: ComponentFixture<InventarioapreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioapreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
