import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {


  mostartLoading:boolean=false;

  artistasEncontrados: any[] = [];

  terminoBusqueda:string="";

  constructor(private _spotify:SpotifyService,private _activatedRoute: ActivatedRoute) {}



  ngOnInit(): void {
    this._activatedRoute.params.subscribe(p => {
      let term:string=p['termino'];

      if (term?.length>3){
        this.buscarArtista(term);
      }
      
    });
  }

  buscarArtista(term:string){
    
    this.mostartLoading=true;
    this.terminoBusqueda=term;

    if (this.terminoBusqueda.length>3){
      this._spotify.findArtists(this.terminoBusqueda)
      .then((data:any)=>this.artistasEncontrados=data)
      .finally(()=> this.mostartLoading=false);
    }
    
  }
}
