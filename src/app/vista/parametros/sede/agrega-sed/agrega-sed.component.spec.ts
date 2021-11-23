import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaSedComponent } from './agrega-sed.component';

describe('AgregaSedComponent', () => {
  let component: AgregaSedComponent;
  let fixture: ComponentFixture<AgregaSedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaSedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaSedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
