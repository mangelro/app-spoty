import locales from '@angular/common/locales/es'
import localfr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';

import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';

import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SafeurlPipe } from './pipes/safeurl.pipe';

registerLocaleData(locales);
registerLocaleData(localfr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es',

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
