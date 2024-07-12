import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  constructor(private http:HttpClient){}
  nombre='';
  pokemon:any={
    tipo:"",
    nombre:"",
    ataque:"",
    img:"",
    img2:""
  }

  buscar(){
    let url = `https://pokeapi.co/api/v2/pokemon/${this.nombre}`;
    let pokemon=this.http.get(url).subscribe((pokemon:any)=>{
      this.pokemon.nombre=pokemon.name;
      this.pokemon.tipo= pokemon.types[0].type.name;
      this.pokemon.ataque = pokemon.moves[0].move.name;
      this.pokemon.img = pokemon.sprites.front_default;
      this.pokemon.img2 = pokemon.sprites.back_default;
    });

  }
}

