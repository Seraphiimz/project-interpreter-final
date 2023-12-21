import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuporteInterpreterComponent } from './suporte-interpreter.component';

describe('SuporteInterpreterComponent', () => {
  let component: SuporteInterpreterComponent;
  let fixture: ComponentFixture<SuporteInterpreterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuporteInterpreterComponent]
    });
    fixture = TestBed.createComponent(SuporteInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
