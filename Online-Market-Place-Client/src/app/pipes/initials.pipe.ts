import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
  transform(value: string) {  
    return value.split(" ").reduce((a,b) => a + b.toUpperCase()[0], '');
  }

}
