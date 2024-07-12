import { Component } from '@angular/core';
import { Datos } from '../datos';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  listado:Datos[]=[];

  constructor(private http:HttpClient){
    const URL ="https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";

    this.http.get(URL).subscribe((respuesta : any) => {
      console.log("listado", respuesta.results)
      this.listado = respuesta.results;
      for (let i = 0; i < this.listado.length; i++) {
        let URL2 =`https://pokeapi.co/api/v2/pokemon/${this.listado[i].name}`;
        this.http.get(URL2).subscribe((respuesta2 : any) => {
          this.listado[i].sprites = respuesta2.sprites;
          console.log('sprites',respuesta2.sprites)
        })
      }

  })}
}
