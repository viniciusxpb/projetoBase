import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente10',
  templateUrl: './componente10.component.html',
  styleUrls: ['./componente10.component.scss']
})
export class Componente10Component {
  @Output() clicked = new EventEmitter<void>();

  listaPessoas =[
    {
      nome:"João",
      comidaFavorita: "Pizza"
    },
    {
      nome:"Maria",
      comidaFavorita: "Chocolate"
    },
    {
      nome:"Pedro",
      comidaFavorita: "Banana"
    },
    {
      nome:"Jorge",
      comidaFavorita: "Pastel"
    },
    
  ]

  cliqueiBotaoFor(pessoa:any){
    window.alert("A comida favorita de"+pessoa.nome+" é "+pessoa.comidaFavorita);
  }

  onClick() {
    this.clicked.emit();
  }

   cliqueiBotaoComponente10(valor:string) {
    window.alert(valor)
 
  }
  listaDeComidas: string[] = ['pamonha', 'pizza', 'banana', 'pão de queijo'];


}

