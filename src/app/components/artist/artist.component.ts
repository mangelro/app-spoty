import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {


  mostartLoading:boolean=true;
  artista:any={};
  topTracks:any[]=[];

  constructor(private _spotify: SpotifyService, private _activeLink: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this._activeLink.params.subscribe(p=>
      {

        let id= p['id'];
        console.log('Artista recibido ' + id);
        this.getArtista(id);
        this.getTopTrack(id);
      });
  }

  getArtista(id:string){

    this._spotify.getArtists(id)
    .then(a=>
      {
        this.artista=a;
        console.log(a);
      })
    .finally(()=> this.mostartLoading=false);
        
  }

  getTopTrack(id:string){
    this._spotify.getTopTrack(id)
    .then(t=>
      {
        this.topTracks=t;
        console.log(t);
      })
    .finally(()=> this.mostartLoading=false);

  }

}
