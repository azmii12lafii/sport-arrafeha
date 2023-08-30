import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stade'
})
export class StadePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
