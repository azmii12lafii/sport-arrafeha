import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let voys = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
    let novCh = "";
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
      for (let j = 0; j < voys.length; j++) {
        if (ch[i] == voys[j]) {
          x = "*"
          break;
        }
      }
      novCh = novCh + x;
    }
    return novCh;
  }

}

