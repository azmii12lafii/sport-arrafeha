import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string) {
    let sh: string = ""
    for (let i = ch.length-1; i >= 0; i--) {
      sh = sh+ch[i];;
    }
    return sh;
  }

}
