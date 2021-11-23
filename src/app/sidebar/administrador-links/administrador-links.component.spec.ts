import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLinksComponent } from './administrador-links.component';

describe('AdministradorLinksComponent', () => {
  let component: AdministradorLinksComponent;
  let fixture: ComponentFixture<AdministradorLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
