import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizLinksComponent } from './aprendiz-links.component';

describe('AprendizLinksComponent', () => {
  let component: AprendizLinksComponent;
  let fixture: ComponentFixture<AprendizLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprendizLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendizLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
