import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetoBase';

  cliqueiBotaoComponente3() {
    window.alert("Você clicou no botão do componente 3")
  }

}
