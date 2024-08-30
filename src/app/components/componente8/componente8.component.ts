import { Component } from '@angular/core';

@Component({
  selector: 'app-componente8',
  templateUrl: './componente8.component.html',
  styleUrls: ['./componente8.component.scss']
})
export class Componente8Component {

  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
   }
  listaDeFilmes: string[] = ['velozes e furiosos', 'panico', 'vingadores 1', 'vingadores 2'];

}
