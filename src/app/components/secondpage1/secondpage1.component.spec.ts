import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondpage1Component } from './secondpage1.component';

describe('Secondpage1Component', () => {
  let component: Secondpage1Component;
  let fixture: ComponentFixture<Secondpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondpage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
