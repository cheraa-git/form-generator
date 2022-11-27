import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberType'
})
export class NumberTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
