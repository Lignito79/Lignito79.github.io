import { Component } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent {

  idiomas : Array<any> = [];

constructor() { }

ngOnInit(): void {

  let idioma1 = {
    nombreIdioma: "Español",
    nivel: "Alto"
  };

  let idioma2 = {
    nombreIdioma: "Inglés",
    nivel: "Alto"
  };


  this.idiomas.push(idioma1);
  this.idiomas.push(idioma2);
}

}
