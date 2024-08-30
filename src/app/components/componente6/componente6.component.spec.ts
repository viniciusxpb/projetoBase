import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente6Component } from './componente6.component';

describe('Componente6Component', () => {
  let component: Componente6Component;
  let fixture: ComponentFixture<Componente6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente6Component]
    });
    fixture = TestBed.createComponent(Componente6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
