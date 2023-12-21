import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoInterpreterComponent } from './edicao-interpreter.component';

describe('EdicaoInterpreterComponent', () => {
  let component: EdicaoInterpreterComponent;
  let fixture: ComponentFixture<EdicaoInterpreterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoInterpreterComponent]
    });
    fixture = TestBed.createComponent(EdicaoInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
