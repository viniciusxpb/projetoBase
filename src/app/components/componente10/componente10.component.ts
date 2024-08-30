import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente10',
  templateUrl: './componente10.component.html',
  styleUrls: ['./componente10.component.scss']
})
export class Componente10Component {
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }

   cliqueiBotaoComponente10(valor:string) {
    window.alert(valor)
 
  }
  listaDeComidas: string[] = ['pamonha', 'pizza', 'banana', 'pão de queijo'];


}
