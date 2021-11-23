import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradornLinksComponent } from './administradorn-links.component';

describe('AdministradornLinksComponent', () => {
  let component: AdministradornLinksComponent;
  let fixture: ComponentFixture<AdministradornLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradornLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradornLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
