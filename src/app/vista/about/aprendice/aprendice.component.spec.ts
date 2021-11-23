import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendiceComponent } from './aprendice.component';

describe('AprendiceComponent', () => {
  let component: AprendiceComponent;
  let fixture: ComponentFixture<AprendiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprendiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
