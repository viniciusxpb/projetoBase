import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente8Component } from './componente8.component';

describe('Componente8Component', () => {
  let component: Componente8Component;
  let fixture: ComponentFixture<Componente8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Componente8Component]
    });
    fixture = TestBed.createComponent(Componente8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
