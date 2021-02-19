
import { Component, OnInit } from '@angular/core';
import { NewRelease } from 'src/app/models/newRelease';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  

  error:string="";
  mostartLoading:boolean=true;
  nuevasCanciones: NewRelease[] = [];

  constructor(private _spotify:SpotifyService)  {}

  ngOnInit(): void {
   this._spotify.getNewReleases()
    .then((data:NewRelease[]) => this.nuevasCanciones=data)
    .catch((e) => this.error="No se pueden cargar los últimos lanzamientos: " + e.message)
    .finally(()=> this.mostartLoading=false);
  }

}
