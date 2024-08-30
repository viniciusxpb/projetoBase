import { Component } from '@angular/core';

@Component({
  selector: 'app-componente9',
  templateUrl: './componente9.component.html',
  styleUrls: ['./componente9.component.scss']
})
export class Componente9Component {

  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
   }
  listaDeFilmes: string[] = ['velozes e furiosos', 'panico', 'vingadores 1', 'vingadores 2'];

}


