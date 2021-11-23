import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioaComponent } from './inventarioa.component';

describe('InventarioaComponent', () => {
  let component: InventarioaComponent;
  let fixture: ComponentFixture<InventarioaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
