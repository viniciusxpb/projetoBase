import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente5Component } from './componente5.component';

describe('Componente5Component', () => {
  let component: Componente5Component;
  let fixture: ComponentFixture<Componente5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente5Component]
    });
    fixture = TestBed.createComponent(Componente5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
