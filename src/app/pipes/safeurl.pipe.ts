import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  trackUrl="https://open.spotify.com/embed?uri=";
  
  constructor(private domSanitizer: DomSanitizer){

  }


  transform(value: string, url?:string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
