import { NgModule } from '@angular/core';

//Components
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent,},
  {path:'search/:termino', component: SearchComponent},
  {path:'artist/:id', component: ArtistComponent},
  {path:'', pathMatch:'full', component: HomeComponent},
  {path:'**', pathMatch:'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
