import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.scss']
})
export class Componente6Component {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

}
