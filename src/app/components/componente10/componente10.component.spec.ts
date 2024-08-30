import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente10Component } from './componente10.component';

describe('Componente10Component', () => {
  let component: Componente10Component;
  let fixture: ComponentFixture<Componente10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente10Component]
    });
    fixture = TestBed.createComponent(Componente10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
