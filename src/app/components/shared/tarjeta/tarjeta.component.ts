import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewRelease } from 'src/app/models/newRelease';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
  ]
})
export class TarjetaComponent {


  @Input() item:NewRelease|any;

  constructor(private _router:Router) { }


  VerArtista(id:string){
    console.log('ID del artista ' + id);
    this._router.navigate(['/artist', id]);
  }
}
