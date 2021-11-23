import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendiznLinksComponent } from './aprendizn-links.component';

describe('AprendiznLinksComponent', () => {
  let component: AprendiznLinksComponent;
  let fixture: ComponentFixture<AprendiznLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprendiznLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprendiznLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
