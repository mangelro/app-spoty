import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {


  

  constructor(private _router: Router) { }
  
  ngOnInit(): void {
  }
  
  buscarArtista(termino:string){

    if (termino.length>3){
      this._router.navigate(['/search',termino]);
    }

  }

}
