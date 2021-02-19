import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[]): string {
    
    if (!value || value.length==0){
      return '/assets/img/banner-ico.png';
    }

    return value[0].url;
  }

}
