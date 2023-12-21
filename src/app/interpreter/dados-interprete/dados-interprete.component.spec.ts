import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosInterpreteComponent } from './dados-interprete.component';

describe('DadosInterpreteComponent', () => {
  let component: DadosInterpreteComponent;
  let fixture: ComponentFixture<DadosInterpreteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosInterpreteComponent]
    });
    fixture = TestBed.createComponent(DadosInterpreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
