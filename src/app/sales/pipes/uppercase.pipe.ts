import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePer',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (args[0] === false) return value.toLocaleLowerCase();
    return value.toUpperCase();
  }
}
