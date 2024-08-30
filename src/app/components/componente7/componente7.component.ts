import { Component } from '@angular/core';

@Component({
  selector: 'app-componente7',
  templateUrl: './componente7.component.html',
  styleUrls: ['./componente7.component.scss']
})
export class Componente7Component {
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
